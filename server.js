import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'


//config dotenv
dotenv.config()

//confg express
const app = express()
app.use(express.json())

//conf mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongodb configurado'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'home.html')); // Caminho absoluto do arquivo home.html
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`))