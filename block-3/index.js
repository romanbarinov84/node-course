const fs = require('fs');



console.log('start');


 fs.readFile('./test/data/text.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        
    }
    console.log('file:', data);
    
});




console.log('end');

