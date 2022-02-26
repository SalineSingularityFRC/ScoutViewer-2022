const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const fs = require("fs")
const util = require("util")
const home = "/public/home.html"

app.use(express.static(path.join(__dirname + "/public")))





//JSON CODEEEEEEEEEEEEEEEEEEEEEEE######################################
const directoryPath = path.join(__dirname, '/public/json');
fs.readdir(directoryPath, function (err, files) {
if (err) {
return console.log('Unable to scan directory: ' + err);
} 
const data = []
let filedata = {};

  for(var i = 0; i< files.length; i++){

    let teamName = String(files[i]).valueOf().split(".json").join("")
    filedata[teamName] = JSON.parse(fs.readFileSync(path.join(__dirname, '/public/json/' + files[i])));
   
  }
  data.push(filedata)  

   try{
  fs.writeFileSync(path.join(__dirname, '/public/js/final.json'), util.format("%j", data))
  console.log("Success, JSON Data appended to final.json!")
} catch (err) {
  console.error(err)
}


});


//WEBSITE CODEEEEEEEEEE#######################################



router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/home.html'));
  });
  

app.use('/', router);

app.listen(80)

console.log("Website running on port " + 80)