import express from 'express';
import vehiculoRoutes from './routes/vehiculo.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', vehiculoRoutes);

app.get('/test', (req, res) => {
    res.json({ ok: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

export default app;
