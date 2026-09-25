
const os = require('os');


const uptime = Math.floor( os.uptime());
const hours = Math.floor(uptime / 3600)
const minutes = Math.floor((uptime % 3600)/ 60);
const second = Math.floor(minutes % 60)

console.log(uptime);
console.log(`Hours:${hours}: minutes:${minutes} : sec:${second}`);

