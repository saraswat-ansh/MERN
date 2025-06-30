const fsOperation = require('fs');
const readl = require('readline');
const r1 = readl.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("ENTER DATA NAME--", (contentToWrite) => {
    r1.question("ENTER DATA age--", (contentToage) => {
        r1.question("ENTER DATA contact no--", (contentTocon) => {
          const  condetail=`NAME--${contentToWrite}\nAGE--${contentToage}\nCONTACT--${contentTocon}`
        fsOperation.writeFile('customer.txt', condetail, 'utf-8', (err) => {
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
        r1.close();
     })
     })
     })