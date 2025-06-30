const test = require("./check")

// let a=13;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter a number: ', (inputString) => {
    const a= parseInt(inputString);
test(a)
rl.close();
})
