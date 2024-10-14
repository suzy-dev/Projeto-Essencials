import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './database.js'
import path from 'path'
import ejs from 'ejs'
import reservaRoutes from './routes/reservaRoutes.js' // Importa as rotas

//config dotenv
dotenv.config()

//connect MongoDB
connectDB()

//config Express
const app = express()
app.use(express.json()) // Para que o Express possa interpretar JSON
app.use(express.urlencoded({ extended: true })) // Para que o Express possa interpretar dados de formulários

//config EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))

//rota de reserva
app.use('/reserva', reservaRoutes); 

app.get('/', (req, res) => {
    res.render('inicio.ejs')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`))
