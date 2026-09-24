
const os = require('os');

const cpus = os.cpus();

cpus.forEach((item,index) => {

    console.log(`CPU${index}: ${item.model} "|" Speed:  ${item.speed}`);
    
})