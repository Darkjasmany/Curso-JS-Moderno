import express, { Router } from "express";
import {
    paginaContacto,
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje,
} from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router(); // Estamos instanciando Express pero utilizando Router

// get para mostrar
// post para enviar datos al servidor

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleViaje); // Lo creamos las subrutas con un comodin, es el campo de la BD
router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);
router.get("/contacto", paginaContacto);

export default router;
