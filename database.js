import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis do .env

const dbURL = process.env.MONGO_URI; // Usa a variável de ambiente

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL); // Removidos os parâmetros obsoletos
        console.log('MongoDB conectado com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
};

export default connectDB;
