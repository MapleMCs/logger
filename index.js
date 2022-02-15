let chalk = require("chalk");

let info = message => {
  if (!message) throw new Error("No message specified!");
  let x = new Date();
  let date =
    x.getDate() + "/" + 
    (x.getMonth() + 1) + "/" +
    x.getFullYear() + " | " + 
    x.getHours() + ":" +
    x.getMinutes() + ":" + 
    x.getSeconds();
    
    return console.log(
      "[ " + chalk.magenta(date) + " ]: " +
      chalk.greenBright(message)
    );
};

let error = (status, message) => {
  if (!message) throw new Error("No message specified!");
  if (!status) throw new Error("No status specified!");
  
  let x = new Date();
  let date =
    x.getDate() + "/" + 
    (x.getMonth() + 1) + "/" +
    x.getFullYear() + " | " + 
    x.getHours() + ":" +
    x.getMinutes() + ":" + 
    x.getSeconds();
    
    return console.log(
      "[ " + chalk.magenta(date) + " ]: " +
      "[ " + chalk.red(status) + " ]: " +
      chalk.red(message)
    );
};

let warn = message => {
  if (!message) throw new Error("No message specified!");
  let x = new Date();
  let date =
    x.getDate() + "/" + 
    (x.getMonth() + 1) + "/" +
    x.getFullYear() + " | " + 
    x.getHours() + ":" +
    x.getMinutes() + ":" + 
    x.getSeconds();
    
    return console.log(
      "[ " + chalk.magenta(date) + " ]: " +
      chalk.yellow(message)
    );
};

let hex = (code, message) => {
  if (!code) throw new Error("No hex code specified!");
  if (!message) throw new Error("No message specified!");
  let x = new Date();
  let date =
    x.getDate() + "/" + 
    (x.getMonth() + 1) + "/" +
    x.getFullYear() + " | " + 
    x.getHours() + ":" +
    x.getMinutes() + ":" + 
    x.getSeconds();
  
  let msg = `[ ${date} ]: ${message}`
  
  return console.log(
    chalk.hex(code)(msg)
  );
};

module.exports = {
  hex,
  error,
  info,
  warn
};