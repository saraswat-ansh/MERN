//10. Accept 2 number and display square if the first number is greater else display cube


// let a=2;
// let b=4;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter a numaber(A): ', (inputString) => {
    const a = parseInt(inputString);
    rl.question('enter a number(B): ', (inputString) => {
        const b = parseInt(inputString);
       if(a>b){
        console.log(a**2)
       }else{
        console.log(a**3)
       }
        rl.close();
    })
})