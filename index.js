console.log("🔥 ESTOY EJECUTANDO ESTE INDEX.JS");
import app from './src/app.js';
import pool from './src/config/database.js';

const PORT = 3001;

const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión a MySQL exitosa');
        connection.release();
    } catch (error) {
        console.log('ERROR MYSQL:', error.message);
    }
};

testConnection();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});