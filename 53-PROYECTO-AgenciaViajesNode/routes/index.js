import express, { Router } from "express";

const router = express.Router(); // Estamos instanciando Express pero utilizando Router

// req- lo que enviamos : res - lo que express responde
router.get("/", (req, res) => {
    res.send("Inicio");
});
router.get("/nosotros", (req, res) => {
    res.send("Nosotros");
});
router.get("/contacto", (req, res) => {
    res.send("Contacto");
});

export default router;
