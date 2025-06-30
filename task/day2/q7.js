// 7. Compare input PIN with stored PIN. If matched → "Access granted", else → "Wrong
// PIN".

var storedpin="password";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter your PIN: ', (inputString) => {
    const pin= inputString;
if (pin==storedpin){
    console.log("Access granted")
}else{
   console.log("Wrong PIN")
}
rl.close();
})
