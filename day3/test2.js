const fsOperation = require('fs');
const contentToWrite = "Hello from Node.js!\nThis will overwrite the file.";
fsOperation.writeFile('data.txt', contentToWrite, 'utf-8', (err) => {
    if (err) {
        console.error(" Error writing to file:", err.message);
        return;
    }
    console.log(" File written successfully!");
});

console.log("WELCOME");
function checkme(err, data) {
    if (err) {
        console.error('Issue', err.message);
        return;
    }
    console.log(data);
}



