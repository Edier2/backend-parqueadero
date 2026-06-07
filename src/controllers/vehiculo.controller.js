import { crearVehiculoDB, obtenerVehiculosDB, actualizarVehiculoDB, eliminarVehiculoDB } from '../models/vehiculo.model.js';
import pool from '../config/database.js';

// CREATE
export const crearVehiculo = async (req, res) => {
    try {
        const result = await crearVehiculoDB(req.body);

        res.json({
            message: 'Vehículo creado correctamente',
            placa: req.body.placa
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// READ
export const obtenerVehiculos = async (req, res) => {
    try {
        const vehiculos = await obtenerVehiculosDB();
        res.json(vehiculos);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//UPDATE
export const actualizarVehiculo = async (req, res) => {
    try {
        const { placa } = req.params;
        const { tipo } = req.body;

        await actualizarVehiculoDB(placa, tipo);

        res.json({
            message: 'Vehículo actualizado correctamente'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//DELETE
export const eliminarVehiculo = async (req, res) => {
    try {
        const { placa } = req.params;

        await eliminarVehiculoDB(placa);

        res.json({
            message: 'Vehículo eliminado correctamente'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};