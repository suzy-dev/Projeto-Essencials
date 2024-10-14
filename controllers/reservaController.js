import Reserva from '../models/Reserva.js'

export const criarReserva = async (req, res) => {
    const { nomeCliente, emailCliente, telefone, mesaId, mesaQtdPessoas, data, hora, descricao } = req.body;

    const novaReserva = new Reserva({
        nomeCliente,
        emailCliente,
        telefone,
        mesaId,
        mesaQtdPessoas,
        data,
        hora,
        descricao
    });

    try {
        await novaReserva.save(); 
        res.status(201).json({ message: 'Reserva criada com sucesso!' });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar reserva', error: error.message });
    }
};
