const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require('cookie-session');
const fs = require('fs');
const express = require('express')
const app = express()

const whitelist = ['http://localhost:8081', 'http://localhost:8080'];

app.use(cors({credentials: true, origin: whitelist}));
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
        done(null, false, { message: 'Incorrect username or password'})
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
app.get("/api/logout", function(req, res) {
  req.logout();
  console.log("logged out");
  return res.send();
});

//ricavare i dati dell'utente loggato
app.get("/api/user", authMiddleware, (req, res) => {
  console.log("Stai cercando un utente");
  let user = JSON.parse(fs.readFileSync('users.json')).users.find(user => {
    console.log(user.name);
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
    username: req.body.username , 
    password:req.body.password 
  };
  //aggiungo il nuovo utente all'oggetto
  data.users.push(newUser);
  //riscrivo su file
  fs.writeFileSync("users.json", JSON.stringify(data, null, 4));
  return res.send();
});

//per creare la storia
app.post("/writeStory", (req, res) => {
  let story = JSON.stringify(req.body);
  fs.writeFile(story.name, story);
  res.send();
});

//Per aprire la storia dalla parte player da un file json
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



const playerHttp = require("http").Server(app);
const playerIo = require("socket.io")(playerHttp, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    allowedHeaders: ["cors-header"],
    credentials: true,
  },
});

const adminHttp = require("http").Server(app);
const adminIo = require("socket.io")(adminHttp, {
  cors: {
    origin: "http://localhost:8081",
    methods: ["GET", "POST"],
    allowedHeaders: ["cors-header"],
    credentials: true,
  },
});

const botName = "Robottino Maggicco";

//PLAYER - SOCKET
playerIo.on("connection", (playerSocket) => {
  console.log("Player client connected, connection id: " + playerSocket.id);
  playerSocket.emit('welcome_message', {
    username: botName,
    text: "Welcome: " + playerSocket.id
  });
  
  playerSocket.on('player_message', (data) => {
    console.log(data);
    playerSocket.emit('my_message', {
      username: playerSocket.id,
      text: data
    });
  });

  playerSocket.on('disconnect', () => {
    playerSocket.broadcast.emit('player_disconnect', {
      username: botName,
      text: playerSocket.id + ' ha lasciato la chat'
    });
  });


});
playerHttp.listen(3000, () => {
  console.log("player http server listening on port: 3000");
});

//ADMIN - SOCKET
adminIo.on("connection", (adminSocket) => {
  console.log("Admin client connected, connection id: " + adminSocket.id);
});
adminHttp.listen(3001, () => {
  console.log("admin http server listening on port: 3001");
});

app.listen(3500, () => {
  console.log("listening on port 3500");
})
