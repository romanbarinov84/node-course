
const fs = require('fs');
const path = require('path');


const pathToTextFile = path.join('test','data','text.txt');


fs.writeFile(pathToTextFile , 'I must be of , because my britches is very dirty',(err) => {
    if(err){
        console.log('write operation was failed',err);
        return
    }
   else {
        console.log(' File was written');
        fs.readFile(pathToTextFile,'utf-8',(err,data) => {
            if(err){
                console.log('reading operation is failed');
                return;
            }
            {
                console.log('File was read');
               
            }
            console.log(data);
            
            
        })
    }
    
    
})