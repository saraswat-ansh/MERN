//1. Write a program that checks if a number is even or odd.
// let a=37;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter a number: ', (inputString) => {
    const a = parseInt(inputString);
if(a%2==0){
    console.log("EVEN")
}else{

    console.log("ODD")
}
rl.close();
})