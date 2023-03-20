/*
GLOBALS - NO WINDOW

__dirname - path to current directory

__filename - file name

require - function to use module (Common Js)

module - info about current module (file)

process - info about env where the program is being executed


*/

console.log(__dirname);
console.log(__filename);

setInterval(()=>{
    console.log(__filename);
},2000);
