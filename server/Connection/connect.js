const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb+srv://hardeep41016:suji317@cluster0.fmiditv.mongodb.net/') 
}

module.exports = {connectDB}