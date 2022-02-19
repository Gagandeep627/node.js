// blocking vs non - blocking


const fs = require("fs");
// asynchronous function
// 1)using callbacks for the execution of the code

let text = fs.readFile("txt1.txt","utf-8", (error, b)=>{

    // console.log(error, b);

    console.log(b);

});

console.log("seeing the asynchronous// Non-blocking version");