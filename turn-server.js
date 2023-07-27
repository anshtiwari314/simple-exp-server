var Turn = require('node-turn');
let dotenv = require('dotenv');
const express = require('express')
let app = express()
dotenv.config()
let PORT = process.env.PORT || 5010

console.log("the current port is",PORT)

app.set('host', process.env.HOST || '0.0.0.0');
var server = new Turn({
  // set options
  listeningPort:PORT,
  authMech: 'long-term',
  credentials: {
    anshtiwari314: "jokanomy-jarvis"
  }
});
server.start();