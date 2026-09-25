
const os = require('os');




function getOSInfo() {
 
    console.log("===== SYSTEM INFO =====");
    console.log("===== OS: =====");
    console.log("Platform : ", os.platform());
    console.log("Type : ", os.type());
    console.log("Release : ",os.release());
    console.log("Architecture : ",os.arch());
    
    
    console.log("===== user INFO =====");
    console.log("UserName : ", os.userInfo().username);
    console.log("Home Directory :" , os.userInfo().homedir);
    
    

 
  
  
}

getOSInfo()