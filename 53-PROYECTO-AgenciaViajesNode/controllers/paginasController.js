// Importamos el modelo
import { request } from "express";
import { Viaje } from "../models/Viajes.js";
import { Testimoniales } from "../models/Testimoniales.js";

// req- lo que enviamos : res - lo que express responde
const paginaInicio = (req, res) => {
    res.render("inicio", {
        pagina: "Inicio", //  pasamos la variable de pagina donde indicamos el titulo y lo vemos con h1
    });
};

const paginaNosotros = (req, res) => {
    // res.send("Nosotros"); // send imprime algo en pantalla
    res.render("nosotros", {
        pagina: "Nosotros",
    });
};

const paginaViajes = async (req, res) => {
    // Consultar BD
    // este metodo va a traer todos los registros de esa tabla
    const viajes = await Viaje.findAll();

    // console.log(viajes);

    res.render("viajes", {
        pagina: "Próximos Viajes",
        viajes, // Esto es igual a viajes: viajes
    });
};

// Muestra su viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    // console.log(req.params);// req.params, segun el comodin segun definimos en la ruta es el campo de la BD que lo extraemos
    // console.log("aqui");

    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where: { slug } }); //slug: slug

        res.render("viaje", {
            pagina: "Información Viaje",
            viaje,
        });
    } catch (error) {
        console.error(error);
    }
};

const paginaTestimoniales = async (req, res) => {
    const testimoniales = await Testimoniales.findAll();
    res.render("testimoniales", {
        pagina: "Testimoniales",
        testimoniales,
    });
};

const paginaContacto = (req, res) => {
    res.render("contacto", {
        pagina: "Contacto",
    });
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaContacto,
    paginaDetalleViaje,
};
