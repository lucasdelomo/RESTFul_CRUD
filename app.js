import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = "5000";

app.use(express.json());

app.listen(PORT, () => console.log(`Servidor em execução em http://localhost:${PORT}`));
