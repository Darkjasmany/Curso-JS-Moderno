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

const paginaViajes = (req, res) => {
    res.render("viajes", {
        pagina: "Viajes",
    });
};

const paginaTestimoniales = (req, res) => {
    res.render("testimoniales", {
        pagina: "Testimoniales",
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
};
