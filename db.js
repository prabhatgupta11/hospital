
const mongoose = require("mongoose");


const connection = mongoose.connect("mongodb+srv://prabhat:prabhat@cluster0.tohzp.mongodb.net/masaimanagement?retryWrites=true&w=majority")

module.exports={
    connection
}