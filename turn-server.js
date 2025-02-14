
let dotenv = require('dotenv');
const express = require('express')
const cors  = require('cors')
let app = express()
dotenv.config()
let PORT = process.env.PORT || 3000
let HOST = process.env.HOST || '127.0.0.1'

console.log("the current port and host",PORT,HOST)


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/", (req, res) => {
  // console.log('req is coming to server',req)
 //res.sendFile(path.join(__dirname, "dist", "index.html"));
 res.json({result:'ok'})
})

app.get("/getPage", (req, res) => {
   //console.log('req is coming to server',req)
 //res.sendFile(path.join(__dirname, "dist", "index2.html"));
 res.json({result:'ok'})
})
//app.set('host', HOST);


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
