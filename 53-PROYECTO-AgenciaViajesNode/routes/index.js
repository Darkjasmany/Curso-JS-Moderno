import express, { Router } from "express";

const router = express.Router(); // Estamos instanciando Express pero utilizando Router

// req- lo que enviamos : res - lo que express responde
router.get("/", (req, res) => {
    res.render("inicio");
});
router.get("/nosotros", (req, res) => {
    // res.send("Nosotros"); // send imprime algo en pantalla

    res.render("nosotros");
});
router.get("/contacto", (req, res) => {
    res.render("contacto");
});

export default router;
