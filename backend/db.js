const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://himanshukr_04:himanshu1305@cluster0.7lxvpvp.mongodb.net/gofoodmern';

const mongoDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(mongoURI);
        console.log(`\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);

        const db = connectionInstance.connection.db; // Using the connection instance to get the db object
        const collection = db.collection('food_items'); // Getting the collection

        //const data = await collection.find({}).toArray(); // Fetching data from the collection
        //console.log('Fetched data:', data);
    } catch (error) {
        console.error('MONGODB connection error:', error);
        process.exit(1); // Exit the process if there is a connection error
    }
};

module.exports = mongoDB;


