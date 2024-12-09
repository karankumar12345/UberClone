const mongoose = require('mongoose');

// MongoDB connection URL (replace with your MongoDB URI)
const MONGO_URI = process.env.URL || 'mongodb://localhost:27017/yourDatabaseName';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connect function
module.exports = connectDB;
