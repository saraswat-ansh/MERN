// 8. Day Type Checker. Input a day (e.g., "Sunday", "Monday") and print:
// 	• "Weekend" for Saturday/Sunday
// 	• "Weekday" for others

var day=["Monday","Tuesday","Wednesday","Thursday","Friday"," Saturday"," Sunday"];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(day)
rl.question('enter a day: ', (inputString) => {
    const d= inputString;
if(d=="Sunday" || d=="Saturday" || d=="saturday" || d=="sunday"){
    console.log("Weekend")
}else{
    console.log("Weekday")
}
rl.close();
})
