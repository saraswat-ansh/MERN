// const fsOperation =require('fs');
// console.log("WELCOME");
// fsOperation.readFile('data.txt','utf-8',(err,data)=>{
// if(err){
// console.error('Issue', err.message);
// return;
// }
// console.log(data);
// });
// console.log("Done with Reading..");


//BETTER WAY TO DOING IT...if your are doing it in a team
function checkme(err,data){
    if(err){
      console.error('Issue', err.message);
      return
    }
    console.log(data);
}
const fsOperation =require('fs');
console.log("WELCOME");
fsOperation.readFile('data.txt','utf-8',checkme);
console.log("Done with Reading..");