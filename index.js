
const fs = require('fs');
const path = require('path');

const pathToFile = path.join('./test','data','text.txt');


function appendReadFile(){
    fs.appendFile(pathToFile,', \n I love Node.js and learning it now',(err) => {
        if(err){
            console.log('Cannot append to file');
            return
        }else{
            fs.readFile(pathToFile,'utf-8',(err,data) => {
                if(err){
                    console.log('Cannot read the file');
                    return
                }else{
                    console.log('file was read');
                    
                }
                console.log(data);
                
            })
        }
    })
}

appendReadFile();

