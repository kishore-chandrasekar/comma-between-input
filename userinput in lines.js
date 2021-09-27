const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let a =(userInput[0])
    let n =a.length
    for(i=0;i<n;i++)
    { console.log(a[i])};

    });