//INPUT NAME FROM USERS
const readl=require('readline');
const r1=readl.createInterface({
});
r1.question("ENTER NAME",(name)=>{
    if(name.length>0){
        const final=name.charAt(0).toUpperCase()+name.slice(1).toLowerCase;
        console.log("NAME__"+final)
    }else{
        console.log("EMPTY")
    }
    r1.close();
})