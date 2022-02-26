const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const home = "/public/home.html"
app.use(express.static(path.join(__dirname + "/public")))


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/home.html'));
  });
  

app.use('/', router);

app.listen(80)

console.log("Website running on port " + 80)