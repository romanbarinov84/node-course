const path = require('path');
const fs = require('fs');


const fileToPath = path.join('./test','data','text.txt');
const fileResolve = path.resolve('text.txt');
const readFile = fs.readFileSync(fileToPath,'utf-8');
const firstNameFile = path.basename(fileToPath);
const nameFolder = path.dirname(fileToPath);
const fileItem = path.extname(fileToPath);

// console.log(readFile);
 console.log(fileToPath);
 console.log(fileResolve);
 
// console.log(firstNameFile);
// console.log(nameFolder);
// console.log(fileItem);






