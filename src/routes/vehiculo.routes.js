import { verificarToken } from '../middlewares/auth.middleware.js';
import express from 'express';
import {
    crearVehiculo,
    obtenerVehiculos,
    actualizarVehiculo,
    eliminarVehiculo
} from '../controllers/vehiculo.controller.js';

const router = express.Router();

router.post('/vehiculos', verificarToken, crearVehiculo);
router.get('/vehiculos', verificarToken, obtenerVehiculos);
router.put('/vehiculos/:placa', verificarToken, actualizarVehiculo);
router.delete('/vehiculos/:placa', verificarToken, eliminarVehiculo);

export default router;