import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database.js'
import reservaRoutes from './routes/reservaRoutes.js' // Importa as rotas

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
});

//rota de reserva
app.post('/reserva', (req, res)=>{
    console.log()
}); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`))
