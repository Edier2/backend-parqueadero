import pool from '../config/database.js';

// Crear vehículo
export const crearVehiculoDB = async (vehiculo) => {
    const { placa, tipo } = vehiculo;

    const [result] = await pool.query(
        'INSERT INTO vehiculos (placa, tipo) VALUES (?, ?)',
        [placa, tipo]
    );

    return result;
};
// Obtener todos
export const obtenerVehiculosDB = async () => {
    const [rows] = await pool.query('SELECT * FROM vehiculos');
    return rows;
};
// Updates
export const actualizarVehiculoDB = async (placa, tipo) => {
    const [result] = await pool.query(
        'UPDATE vehiculos SET tipo = ? WHERE placa = ?',
        [tipo, placa]
    );

    return result;
};
// Eliminar vehiculo
export const eliminarVehiculoDB = async (placa) => {
    const [result] = await pool.query(
        'DELETE FROM vehiculos WHERE placa = ?',
        [placa]
    );

    return result;
};