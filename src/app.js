import express from 'express';
import vehiculoRoutes from './routes/vehiculo.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);

// TEST
app.get('/test', (req, res) => {
    res.json({ ok: true });
});

// CRUD REAL
app.use('/api', vehiculoRoutes);

export default app;