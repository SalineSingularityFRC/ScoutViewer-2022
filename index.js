const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const fs = require("fs")
const util = require("util");
const home = "/public/home.html"

app.use(express.static(path.join(__dirname + "/public")))



//fs.writeFileSync(path.join(__dirname, '/public/js/final.json'), util.format("%j", data))

//JSON CODEEEEEEEEEEEEEEEEEEEEEEE######################################
const directoryPath = path.join(__dirname, '/public/json/');
let data = []

//let features = ["autoLowerHub","autoUpperHub","teleLowerHub","teleUpperHub","hanger"];


fs.readdir(directoryPath, (err, files) => {
  return new Promise((resolve, reject) => {
      if (err) reject(err);
      files.forEach(file => {
        let features = []
         console.log(file);
         let content = require(`${directoryPath}${file}`);
         let indexOf = file.indexOf(".json")
         features.push(content.team)//0
         features.push(content.autoLowerHub)//1
         features.push(content.autoUpperHub)//2
         features.push(content.teleLowerHub)//3
         features.push(content.teleUpperHub)//4
         features.push(content.hanger)//4
         data.push([file.substring(0, indexOf), features])
      });
      resolve(data);
  }).then(data => {
      fs.writeFileSync(path.join(__dirname, '/public/js/final.json'), JSON.stringify(data));
  });
})



//WEBSITE CODEEEEEEEEEE#######################################



router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/home.html'));
   
  });
  

app.use('/', router);

app.listen(80)

console.log("Website running on port " + 80)