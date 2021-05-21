const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`Database connection successful: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Database connection error: ${err.message}`);
    }
}

module.exports = connectDB;