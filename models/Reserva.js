import mongoose from "mongoose";

const reservaTable = new mongoose.Schema({
    nomeCliente: {type: String, required: true},
    emailCliente: {type: String},
    telefone:{type: String, equired: true},
    mesaId: {type: Number, required: true},
    mesaQtdPessoas: {type:Number, require:true},
    statusReserva:{
        type: String,
        status: ['aguardando','confirmado','cancelado'],
        statusDefault: 'aguardando'
    },
    descricao: {type:String}
})

const Reserva = mongoose.model('Reserva',reservaTable)

export default Reserva