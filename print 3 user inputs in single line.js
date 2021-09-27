const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    const a = userInput[0];
    const b = userInput[1];
    const c = userInput[2];
    console.log(a,b,c);
    });