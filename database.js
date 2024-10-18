import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const dbURL = process.env.MONGO_URI; 
const connectDB = async () => {
    try {
        await mongoose.connect(dbURL); 
        console.log('MongoDB conectado com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;
