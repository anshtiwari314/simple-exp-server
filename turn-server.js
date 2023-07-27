var Turn = require('node-turn');
let dotenv = require('dotenv');
const express = require('express')
let app = express()
dotenv.config()
let PORT = process.env.PORT || 5010
let HOST = process.env.HOST || '127.0.0.1'
console.log("the current port and host",PORT,HOST)

app.set('host', HOST);
console.log()
var server = new Turn({
  // set options
  listeningPort:PORT,
  authMech: 'long-term',
  credentials: {
    anshtiwari314: "jokanomy-jarvis"
  }
});
server.start();