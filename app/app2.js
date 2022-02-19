// reading and writing file using node.js-->





const fs = require("fs");

let text = fs.readFileSync("txt1.txt", "utf-8");

console.log("reading a text file ....");
console.log(text);

text = text.replace("Gagu", "Rohan");
console.log(text);

console.log("writing a text file : txt2.txt");
fs.writeFileSync("txt2.txt", text);






