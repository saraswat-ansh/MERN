// 3. Electricity Bill Calculator. Based on units consumed:
// 	0–100 units → "No charge"
// 	101–300 units → "Normal charge"
// 	Above 300 units → "High usage charge"

// let bill=100;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter a bill(in units): ', (inputString) => {
    const bill= parseInt(inputString);
if(bill==0 && bill<=100){
    console.log("NO CHARGE")
}else if(bill>=101 && bill<=300){
    console.log("NORMAL CHARGE")
}else{
    console.log("HIGH USAGE CHARGE")
}
rl.close();
})