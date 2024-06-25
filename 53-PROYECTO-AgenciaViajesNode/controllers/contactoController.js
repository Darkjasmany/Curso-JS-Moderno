import { Contacto } from "../models/Contacto.js";

const enviarContacto = async (req, res) => {
    console.log(req.body); // me muestra el arreglo de nuestro formulario de la vista
    // Validar
    const { nombre, apellido, correo, telefono, direccion, mensaje } = req.body;

    const errores = [];

    if (nombre.trim() === "") {
        errores.push({ mensaje: "El nombre esta vacio" });
    }
    if (apellido.trim() === "") {
        errores.push({ mensaje: "El apellido esta vacio" });
    }
    if (correo.trim() === "") {
        errores.push({ mensaje: "El correo esta vacio" });
    }
    if (telefono.trim() === "") {
        errores.push({ mensaje: "El teléfono esta vacio" });
    }
    if (direccion.trim() === "") {
        errores.push({ mensaje: "La dirección esta vacio" });
    }
    if (mensaje.trim() === "") {
        errores.push({ mensaje: "El mensaje no puede estar vacio" });
    }

    if (errores.length > 0) {
        // Mostrar la vista con errores
        res.render("contacto", {
            pagina: "Contactanos",
            errores,
            nombre,
            apellido,
            correo,
            telefono,
            direccion,
            mensaje,
        });
    } else {
        // Almacenarlo en la BD
        try {
            await Contacto.create({
                nombre,
                apellido,
                correo,
                telefono,
                direccion,
                mensaje,
            });
            res.redirect("/contacto");
        } catch (error) {
            console.error(error);
        }
    }
};

export { enviarContacto };
