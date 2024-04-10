const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/layoutdb';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};



const db = async () => {
    try {
        const collection = mongoose.connection.db;
        return collection;
    } catch (error) {
        console.error('Error getting document count:', error);
        throw new Error('Failed to get document count');
    }
};

module.exports = {connectDB,db};
