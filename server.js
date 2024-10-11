import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import ejs from 'ejs'


//config dotenv
dotenv.config()

//confg express
const app = express()
app.use(express.json())

//config ejs
app.set('view engine', 'ejs')
app.use(express.static('public'))

//conf mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongodb configurado'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.render('inicio.ejs')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`))