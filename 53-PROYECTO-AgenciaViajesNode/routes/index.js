import express, { Router } from "express";

const router = express.Router(); // Estamos instanciando Express pero utilizando Router

// req- lo que enviamos : res - lo que express responde
router.get("/", (req, res) => {
    res.render("inicio", {
        pagina: "Inicio", //  pasamos la variable de pagina donde indicamos el titulo y lo vemos con h1
    });
});
router.get("/nosotros", (req, res) => {
    // res.send("Nosotros"); // send imprime algo en pantalla
    res.render("nosotros", {
        pagina: "Nosotros",
    });
});
router.get("/viajes", (req, res) => {
    res.render("viajes", {
        pagina: "Viajes",
    });
});
router.get("/testimoniales", (req, res) => {
    res.render("testimoniales", {
        pagina: "Testimoniales",
    });
});
router.get("/contacto", (req, res) => {
    res.render("contacto", {
        pagina: "Contacto",
    });
});

export default router;
