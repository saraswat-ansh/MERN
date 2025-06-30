function check(month)
{
console.log("FOR..OF___")
for (const element of month) {
    console.log(element);
}

console.log("FOREACH___")
month.forEach(element => {
    console.log(element);
});
}
function disp(sname){
return "HELLO " + sname
}

// module.exports=check
// module.exports=disp
module.exports={check,disp};//better