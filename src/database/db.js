const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);

        console.log(`MongoDB Connected successfully! Host: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        console.error("ACTION REQUIRED: Check your MongoDB Atlas Network Access (IP Whitelist) settings!");
        
        process.exit(1); 
    }
};

module.exports = connectDB;