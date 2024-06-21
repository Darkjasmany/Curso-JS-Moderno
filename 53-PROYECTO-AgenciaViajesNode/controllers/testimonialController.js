import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    // console.log(req.body); // req muestra mucha informacion y el .body es lo que coloque el usuario en el formulario

    // Validar
    const { nombre, correo, telefono, mensaje } = req.body;

    const errores = [];

    if (nombre.trim() === "") {
        errores.push({ mensaje: "El Nombre esta vacio" });
    }

    if (correo.trim() === "") {
        errores.push({ mensaje: "El Correo esta vacio" });
    }

    if (telefono.trim() === "") {
        errores.push({ mensaje: "El Teléfono esta vacio" });
    }

    if (mensaje.trim() === "") {
        errores.push({ mensaje: "El Mensaje esta vacio" });
    }

    if (errores.length > 0) {
        res.render("testimoniales", {
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            telefono,
            mensaje,
        });
    } else {
        // Almacenarlo en la BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                telefono,
                mensaje,
            });
            res.redirect("/testimoniales");
        } catch (error) {
            console.error(error);
        }
    }
};

export { guardarTestimonial };
