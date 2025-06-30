//VAR IS USED
// function tvar(){
//     if(true){
//         var x=12;
//     }
//     console.log(x);
// }
// tvar();

//LET IS USED
// function tvar(){
//     if(true){
//         let x=12;
//         console.log(x);
//     }
//     // console.log(x);
// }
// tvar();

//CONST IS USED
function tvar(){
    const a="paris"
    if(true){
        var x=12;
        //let x=12;//error x not defined
    }
    // a="up"//flag an error
    console.log(x+a);
}
tvar();