//LOOPS
// let n=6;
// // console.log("MULTIPLICATION TABLE OF "+n);
// console.log(MULTIPLICATION TABLE OF ${n});
// for(let i=1;i<=10;i++){
//     console.log(${n} x ${i} = ${n*i});
// }


const month=["JAN","FEB","MAR","APL","MAY"]
console.log("FOR___")
for(let i=0;i<=month.length;i++){
    console.log(month)
}
console.log("WHILE___")
let i=0;
while (i<=month.length) {
    console.log(month)
    i++
}
console.log("FOR..OF___")
for (const element of month) {
    console.log(element);
}

console.log("FOREACH___")//short approch
month.forEach(element => {
    console.log(element);
});
// console.log("FOREACH___")
// month.forEach(function(element) {
//     console.log(element);
// });