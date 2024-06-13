// Importando Express
import express from "express";
import router from "./routes/index.js";

// Lo asignamos a esta variable para ejecutar Express
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set("view engine", "pug");

// Definir la carpeta publica
app.use(express.static("public"));

// Agregar Router
app.use("/", router);

// Arrancar el servidor
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
