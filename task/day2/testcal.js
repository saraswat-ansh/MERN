const test = require("./calculator")
// let a=10;
// let b=8;

// console.log(test.add(a,b))
// console.log(test.sub(a,b))
// console.log(test.mul(a,b))
// console.log(test.div(a,b))

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter a numaber(A): ', (inputString) => {
    const a = parseInt(inputString);

    rl.question('enter a number(B): ', (inputString) => {
        const b = parseInt(inputString);
        console.log(test.add(a, b))
        console.log(test.sub(a, b))
        console.log(test.mul(a, b))
        console.log(test.div(a, b))
        rl.close();
    })
})