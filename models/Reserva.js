import mongoose from "mongoose";

const reservaTable = new mongoose.Schema({
    nomeCliente: {type: String, required: true},
    emailCliente: {type: String},
    telefone: {type: String, required: true},
    mesaQtdPessoas: {type: Number, required: true},
    data: {type: Date, required: true},
    hora: {type: String, required: true},
    statusReserva: {
        type: String,
        enum: ['aguardando', 'confirmado', 'cancelado'],
        default: 'aguardando'
    },
    descricao: {type: String}
});

const Reserva = mongoose.model('Reserva', reservaTable);

export default Reserva;