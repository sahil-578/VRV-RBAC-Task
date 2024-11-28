import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
// Connect to MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log('💾 MongoDB connected...');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1); 
  }
};