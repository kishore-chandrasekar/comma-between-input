const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let a =(userInput[0]).split(' ');
    console.log(a[0]);
    console.log(a[1]);
    console.log(a[2]);
    });