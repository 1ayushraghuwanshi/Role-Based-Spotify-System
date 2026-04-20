const mongoose = require('mongoose');

async function connectDb() {
    try{
   await mongoose.connect(process.env.MONGO_URI)
    console.log("connection successfull")
    }catch(err){
        console.log("connection failed", err)
    }
}


module.exports = connectDb;