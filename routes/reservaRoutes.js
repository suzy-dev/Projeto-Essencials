import express from 'express';
import { criarReserva } from '../controllers/reservaController.js';

const router = express.Router();

router.post('/reserva', criarReserva);

export default router;
