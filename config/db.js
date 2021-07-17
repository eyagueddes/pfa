const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try {
<<<<<<< HEAD
        await mongoose.connect(db, { 
            useNewUrlParser: true, 
            useCreateIndex: true,
            useFindAndModify:false
=======
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
        });
        console.log('MongoDB Connected...');

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;