// TODO: Importando Express, las Rutas, la config de BD
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

// Conectar a la BD, definido mediante un promise
db.authenticate()
    .then(() => console.log("Conexión Exitosa"))
    .then((error) => console.error(error));

// Lo asignamos a esta variable para ejecutar Express
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set("view engine", "pug");

// Obtener año Actual
// next pasa al siguiente Middleware y lo forzamos hacerlo con el return next()
app.use((req, res, next) => {
    const year = new Date();

    // Escribir sobre ese objeto, como .use se usa en todas las etapas de Express es facil acceder a esta variable en cualquiera de estas vistas
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    next();
});

// Definir la carpeta publica
app.use(express.static("public"));

// Agregar Router
app.use("/", router);

// Arrancar el servidor
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
