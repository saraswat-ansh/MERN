//9. Accept a name and check whether it starts with alphabet or not

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a name: ', (name) => {  
    if (/^[a-zA-Z]/.test(name)) {
      console.log(" starts with an alphabet.");
    } else {
      console.log("does not start with an alphabet.");
    }
  rl.close();
});