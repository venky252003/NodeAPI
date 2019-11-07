var fs = require("fs");
const path = "./logs";

module.exports = {
  async log(error) {    
    await logError(error);      
  }
};

function logError(error) {
    var date = getDate();
    var file = `${path}/${date}.txt`;    

    fs.readFile(`${path}/${date}.txt`, "utf-8", (err, data) => {        
      if (err) {
        createFile(date, error);
      } else {
        data = `${data} \n  ${getTime()} <---- ${error}`;        
        createFile(date, data);
      }
      //console.log(`Error logged : ${data}`);
    });  
}

function createFile(name, data) {  
  var file = `${path}/${name}.txt`;
  fs.writeFile(file, data, err => {
    //if (err) console.log(err);    
  });
}

function getDate() {
  var today = new Date();
  var date = today.getFullYear() + today.getMonth() + today.getDate();
  return date;
}

function getTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
  }

