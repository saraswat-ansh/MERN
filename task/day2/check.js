//Write a module that exports a function to check if a number is prime. Import it in another file and test it with different inputs.

function check(a){
if(a%a==0 && a%1==0){
console.log("Prime Number")
}else{
    console.log("Not a Prime Number")
}
}
module.exports=check;