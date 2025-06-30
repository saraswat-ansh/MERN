//1. Create a module calculator.js that exports add, subtract, and multiply functions. Use them in another file to perform operations on two numbers.

function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}

module.exports={add,sub,mul,div};