//2. Mobile Recharge Offers. Based on the recharge amount:
	// ₹499 or more → "You get 2GB/day for 84 days"
	// ₹199 to ₹498 → "You get 1.5GB/day for 28 days"
	// Below ₹199 → "Basic plan activated"

// let amount=499;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter a amount(₹): ', (inputString) => {
    const amount= parseInt(inputString);
if(amount>=499){
    console.log("You get 2GB/day for 84 days")
}else if(amount<=498 && amount>=199){
    console.log("You get 1.5GB/day for 28 days")
}else{
    console.log("Basic plan activated")
}
rl.close();
})