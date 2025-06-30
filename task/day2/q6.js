// Fuel Level Warning. If fuel in liters is:
// 	• More than 10 → "Sufficient fuel"
// 	• Between 5–10 → "Low fuel"
// 	• Less than 5 → "Refuel immediately"

// let fuel=5;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter your fuel level: ', (inputString) => {
    const fuel= parseInt(inputString);
if (fuel>=10){
    console.log("Sufficient fuel")
}else if(fuel>=5 && fuel<=10){
    console.log("Low fuel")
}else{
   console.log("Refuel immediately")
}
rl.close();
})
