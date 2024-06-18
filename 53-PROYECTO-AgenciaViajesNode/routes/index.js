import express, { Router } from "express";
import {
    paginaContacto,
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
} from "../controllers/paginasController.js";

const router = express.Router(); // Estamos instanciando Express pero utilizando Router

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/testimoniales", paginaTestimoniales);
router.get("/contacto", paginaContacto);

export default router;
