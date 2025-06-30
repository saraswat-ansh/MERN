//5. Ask for a password. If it matches "admin123", print "Login successful", else "Invalid password".

// let password="admin123";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter password: ', (inputString) => {
    const password= inputString;
if(password=="admin123"){
    console.log("Login Successful")
}else{
    console.log("Invalid Password")
}
rl.close();
})