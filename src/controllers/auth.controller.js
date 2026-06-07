import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/database.js';

// REGISTRO
export const register = async (req, res) => {
    try {
        const { nombre, documento, telefono, usuario, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            `INSERT INTO usuarios (nombre, documento, telefono, usuario, password)
             VALUES (?, ?, ?, ?, ?)`,
            [nombre, documento, telefono, usuario, hashedPassword]
        );

        res.json({ message: 'Usuario registrado correctamente' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// LOGIN
export const login = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        const [rows] = await pool.query(
            'SELECT * FROM usuarios WHERE usuario = ?',
            [usuario]
        );

        if (rows.length === 0) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        const user = rows[0];

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign(
            {
                id: user.id_usuario,
                usuario: user.usuario
            },
            'secreto_sena',
            { expiresIn: '2h' }
        );

        res.json({ token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};