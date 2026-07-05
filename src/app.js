import express from 'express';
import vehiculoRoutes from './routes/vehiculo.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();          // 1. Primero crea la app

app.use(express.json());        // 2. Middlewares

app.use('/auth', authRoutes);   // 3. Rutas
app.use('/api', vehiculoRoutes);

app.get('/test', (req, res) => {
    res.json({ ok: true });
});

const PORT = process.env.PORT || 3001;   // 4. Puerto al final
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

const connection = mysql.createConnection({
    host:     process.env.DB_HOST,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default app;
