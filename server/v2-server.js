const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require('cookie-session');
const fs = require('fs');
const express = require('express')
const app = express()

//per CORS array dei domini dei quali accetta la comunicazione
const whitelist = ['http://localhost:8081', 'http://localhost:8080'];

app.use(cors({ credentials: true, origin: whitelist }));
// Tipologia di autenticazione locale
const LocalStrategy = require('passport-local').Strategy;
const { Socket } = require("dgram");

//Creo la sessione con un cookie che dura 24 ore
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'mysession',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
//utilizzo effetticamente passport
app.use(passport.initialize());

app.use(passport.session());
//static files-images
app.use(express.static('images'));


//Middleware
const authMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).send('You are not authenticated');
  } else {
    return next();
  }
};
//Strategia di passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },

    (username, password, done) => {
      let user = JSON.parse(fs.readFileSync('users.json')).users.find((user) => {
        return user.username === username && user.password === password
      })

      if (user) {
        done(null, user)
      } else {
        done(null, false, { message: 'Incorrect username or password' })
      }
    }
  )
);

//Faccio la chiamata all'autenticazione
//login
app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      return res.status(400).send([user, "Cannot log in", info]);
    }
    req.login(user, err => {
      res.send("Logged in " + user.name);
    });
  })(req, res, next);
});

//logout
app.get("/api/logout", function (req, res) {
  req.logout();
  console.log("logged out");
  return res.send();
});

//ricavare i dati dell'utente loggato
app.get("/api/user", authMiddleware, (req, res) => {
  //console.log("Stai cercando un utente");
  let user = JSON.parse(fs.readFileSync('users.json')).users.find(user => {
    //console.log(user.name);
    return user.id === req.session.passport.user;
  })
  //console.log([user, req.session]);
  res.send({ user: user });
});

//Registrazione di un nuovo utente
app.post("/api/register", (req, res) => {
  //metto l'array di utenti letti da file in una variabile
  let data = JSON.parse(fs.readFileSync('users.json'));
  //creo un nuovo utente con i dati forniti
  let newUser = {
    id: data.users.length + 1,
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  };
  //aggiungo il nuovo utente all'oggetto
  data.users.push(newUser);
  //riscrivo su file
  fs.writeFileSync("users.json", JSON.stringify(data, null, 4));
  return res.send();
});

//per creare un file JSON storia con contenuto
app.post("/writeStory", (req, res) => {
  let story = JSON.stringify(req.body);
  fs.writeFile(story.name, story);
  res.send();
});

//Per inviare la storia come file JSON
app.get("/openStory", (req, res) => {
  console.log(req.body);
  let story = JSON.parse(fs.readFileSync('storiaDinosauri.json'));
  res.send(story);
});

//Serializzo e deserializzo l'utente acceduto per mantenerne la sessione
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  let user = JSON.parse(fs.readFileSync('users.json')).users.find((user) => {
    return user.id === id;
  })

  done(null, user);
});

//CHAT
const botName = "Robottino Maggicco";
const chatServer = require("http").Server(app);
const io = require("socket.io")(chatServer, {
  cors: {
    origin: whitelist,
    methods: ["GET", "POST"],
    allowedHeaders: ["cors-header"],
    credentials: true,
  },
});
//oggetto del punteggio con due valori di esempio
let punteggio = [{
  gioco: "gioco1",
  punti: 0
}];

//CHAT - SOCKET
io.on("connection", (chatSocket) => {
  console.log("Client connected, connection id: " + chatSocket.id);
  io.emit('welcome_message', {
    username: botName,
    text: "Welcome: " + chatSocket.id 
  });
  //aggiornamente del punteggio tramite socket
  chatSocket.on('update_score', (data) => {
    if(punteggio.some(punteggioGiusto => punteggioGiusto.gioco === data.gioco)) {
      let i = punteggio.map(x => x.gioco).indexOf(data.gioco);
      punteggio[i].punti += data.punti;
    } else {
      punteggio.push(data);
    }
    io.emit('update_score', punteggio);
  });
  //messaggio inviato da giocatore
  chatSocket.on('player_message', (data) => {
    //console.log(data);
    io.emit('send_admin', {
      username: chatSocket.id,
      text: data
    });
  });

  //Messaggio inviato da admin
  chatSocket.on('admin_message', (data) => {
    io.emit('send_player', {
      username: data.adminName,
      text: data.message
    });
  });
  //evento disconnessione
  chatSocket.on('disconnect', () => {
    io.emit('user_disconnect', {
      username: botName,
      text: chatSocket.id + ' ha lasciato la chat'
    });
  });

});


chatServer.listen(3000, () => {
  console.log("player http server listening on port: 3000");
});

app.listen(3500, () => {
  console.log("listening on port 3500");
})
