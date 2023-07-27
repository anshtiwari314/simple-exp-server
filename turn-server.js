var Turn = require('node-turn');
let dotenv = require('dotenv')
dotenv.config()
let PORT = process.env.PORT || 5010

console.log("the current port is",PORT)
var server = new Turn({
  // set options
  listeningPort:PORT,
  authMech: 'long-term',
  credentials: {
    anshtiwari314: "jokanomy-jarvis"
  }
});
server.start();