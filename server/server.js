const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
app.use(express.static('images'));


app.listen(3000, () => {
  console.log("listening on 3000");
});
