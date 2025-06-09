import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_URI
export const connectDB = async(): Promise<void> =>{

    if (!MONGO_ATLAS_URI) {
        throw new Error('MONGO_URI is not defined in .env file');
    }
    try{
        const conn = await mongoose.connect(MONGO_ATLAS_URI);
        console.info(`[X] - MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error("[X] - Mongo connection error", error);
        process.exit(1);
    }
}