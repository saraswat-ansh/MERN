const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jims',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(async() =>{
        console.log("CONNECTION DONE");
    await mongoose.connection.db.createCollection("users");
    console.log("COLLECTION IS CREATED");
    mongoose.connection.close();
    })
    .catch((err) => console.error("PROBLEM IN CONNECTION", err));


//CONNECTION OF MONGODB SERVER
// mongoose.connect('mongodb://localhost:27017')
//     .then(() => console.log("CONNECTION DONE"))
//     .catch((err) => console.error("PROBLEM IN CONNECTION", err));