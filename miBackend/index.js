const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const usersRouter = require("../miBackend/routes/users");

app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
    res.send(`Escuchando en http://localhost:${port}...`);
});

try {
    app.listen(port, () => {
        console.log(`Escuchando en http://localhost:${port}...`);
    });
} catch (error) {
    console.error(`Error al iniciar el servidor: ${error.message}`);
}

module.exports = app;