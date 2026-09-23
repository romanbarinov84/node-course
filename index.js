
const fs = require('fs');
const path = require('path');


function workFile(){
    const pathToFile = path.join(__dirname,'test','data','text.txt');

    fs.writeFile(pathToFile,'I love Node.js',(err) => {
        if(err){
            console.log(`Cannot write this file : ${pathToFile}`);
            return
        }
     fs.readFile(pathToFile,'utf-8',(err,data) => {
        if(err){
            console.log(`Cannot read this file : ${pathToFile}`);
            return
        }
        console.log('File was reading');
        console.log(data);
        
     })
    })
}

workFile()