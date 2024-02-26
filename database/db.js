const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async ()=>{

    try {
        console.log("url",process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to DB");
    } catch (error) {
        console.error(`Connection to mongoDB failed`, error.message);
        process.exit(1);
    }
}

module.exports=connectDB;
