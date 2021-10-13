import express from 'express';
import moviesRoutes from './routes/movies.js';

const app = express();
const PORT = "5000";

app.use(express.json());

app.use('/movies', moviesRoutes);

app.get('/', (req, res) => res.send('Nada para ver aqui u.u'));

app.listen(PORT, () => console.log(`Servidor em execução em http://localhost:${PORT}`));

