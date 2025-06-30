//4. Check if a student has passed (marks >= 40). Print "Pass" or "Fail".

// marks=73;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter your Marks: ', (inputString) => {
    const marks= parseInt(inputString);
if(marks>=40){
    console.log("Pass")
}else{
    console.log("Fail")
}
rl.close();
})