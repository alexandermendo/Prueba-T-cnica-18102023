const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const usersRouter = require("../miBackend/routes/users");

app.use(express.json());
app.use(cors());

// Usamos el router de users en la ruta raíz "/"
app.use("/", usersRouter);

const port = process.env.PORT || 3002;

try {
    app.listen(port, () => {
        console.log(`Escuchando en http://localhost:${port}...`);
    });
} catch (error) {
    console.error(`Error al iniciar el servidor: ${error.message}`);
}

module.exports = app;
