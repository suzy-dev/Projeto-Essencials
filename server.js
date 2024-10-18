import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database.js'
import reservaRoutes from './routes/reservaRoutes.js'
import Reserva from './models/Reserva.js';

//config dotenv
dotenv.config()

//connect MongoDB
connectDB()

//config Express
const app = express()
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

//config EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('inicio.ejs')
})

app.use('/reserva', reservaRoutes)
app.post("/reserva", (req, res) => {
    const { nomeCliente, emailCliente, telefone, mesaQtdPessoas, data, hora, descricao } = req.body

    Reserva.create({nomeCliente, emailCliente, telefone, mesaQtdPessoas, data, hora, descricao})
    .then(() => {
        res.redirect("/");
    })
    .catch((error) => {
        console.log('Erro ao salvar a reserva:', error);
        res.status(500).send('Erro ao salvar a reserva');
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`))
