// Importando Express
const express = require("express");

// Lo asignamos a esta variable para ejecutar Express
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Arrancar el servidor
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
