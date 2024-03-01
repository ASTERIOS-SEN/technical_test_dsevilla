const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const router = require('./routes/index');

const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta inicial
app.get('/', (req, res) => {
    res.send('Api para personajes Favoritos');
});

// Rutas
router(app);

// Escuchando el puerto
app.listen(port, () => {
    console.log("Port ==> ", port);
});
