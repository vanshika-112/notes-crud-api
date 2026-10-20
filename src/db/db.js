const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://firstSample:YOPqHZAbSAfrnPw5@sample-cluster.abrkvoc.mongodb.net/sample-db");

    console.log("Connected to DB");
}

module.exports = connectDB