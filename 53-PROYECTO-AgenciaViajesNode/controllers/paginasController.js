// Importamos el modelo
import { request } from "express";
import { Viaje } from "../models/Viajes.js";
import { Testimonial } from "../models/Testimoniales.js";

// req- lo que enviamos : res - lo que express responde
const paginaInicio = async (req, res) => {
    //TODO: por lo que esta forma es la correcta y optima el codigo
    // aqui cada promise se ejecuta al mismo tiempo y lo agregamos al arreglo deacuerdo a cada posicion del arreglo 0 a viajes 1 a testimonial
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));
    try {
        // TODO: Esto no es optimo xq puede que la 1er consulta demora mucho y no se ejecuta la segunda consulta
        // Consultamos 3 viajes del modelo de viaje
        // const viajes = await Viaje.findAll({ limit: 3 });
        // const testimoniales = await Testimonial.findAll({ limit: 3 });

        // TODO: pasamos las posiciones a la vista de acuerdo al resultado y con el await Promise.all arreancamos todas las consultas al mismo tiempo
        const resultado = await Promise.all(promiseDB);

        res.render("inicio", {
            pagina: "Inicio", //  pasamos la variable de pagina donde indicamos el titulo y lo vemos con h1
            clase: "home",
            viajes: resultado[0],
            testimoniales: resultado[1],
        });
    } catch (error) {
        console.error(error);
    }
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
    try {
        const testimoniales = await Testimonial.findAll();
        res.render("testimoniales", {
            pagina: "Testimoniales",
            testimoniales,
        });
    } catch (error) {
        console.error(error);
    }
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
