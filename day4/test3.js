// //CALLBACK-----
// function orderFood(foodItem, callback) {
//     console.log(`Order received for ${foodItem}. Preparing your food...`);

//     setTimeout(() => {
//         callback(`${foodItem} is ready! Enjoy your meal.`);
//     }, 3000); // Simulating a 3-second cooking time
// }

// // Customer places order
// orderFood('Paneer Tikka', (message) => {
//     console.log(message);
// });

//PROMISE---
// function orderFood(foodItem) {
//     console.log(`Order received for ${foodItem}. Preparing your food...`);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const issucc=Math.random()>0.2;
//             console.log(Math.random())
//             if(issucc){
//                 resolve(`${foodItem} is ready! Enjoy your meal.`);
//             }else{
//                 reject("Issue")
//             }
//             // resolve(`${foodItem} is ready! Enjoy your meal.`);
//             // reject("Issue")
//         }, 3000);
//     });
// }

// orderFood('Paneer Tikka')
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((err) => {
//         console.error('Something went wrong:', err);
//     });



//ASYNC/AWAIT---
function orderFood(foodItem) {
    console.log(`Order received for ${foodItem}. Preparing your food...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // const issucc=Math.random()>0.2;
            // console.log(Math.random())
            // if(issucc){
            //     resolve(`${foodItem} is ready! Enjoy your meal.`);
            // }else{
            //     reject("Issue")
            // }
            resolve(`${foodItem} is ready! Enjoy your meal.`);
            // reject("Issue")
        }, 3000);
    });
}

async function order(){
try{
const ord=await orderFood("Paneer Tikka")
console.log(ord)
}catch(err){
console.error('Something went wrong:', err);
}
}

order()