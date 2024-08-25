// Globals
// We can access anywhere in the program
// Q. But how are they different from the user defined global variables?


// Note: No Window!!
// __dirname: path to current directory
// __filename: filename
// require: function to use modules (CommonJS)
// modules: info about current module (file)
// process: info about environment where the program is being executed

console.log(`Directory Name: ${__dirname}\nFilename: ${__filename}\n`);
console.log(`Require: ${require}\n`);
console.log(`Module: ${module}\n`);
console.log(`Process: ${process}\n`);

setInterval(() => {
    console.log("Hello World/Second..");  
}, 1000)