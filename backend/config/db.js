const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("MongoDB connected succesfully")
}
catch(err)
{
    console.log(err)
}
}
module.exports =connectDB;
