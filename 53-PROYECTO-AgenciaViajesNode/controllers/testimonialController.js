import { request } from "express";

const guardarTestimonial = (req, res) => {
    // console.log(req.body); // req muestra mucha informacion y el .body es lo que coloque el usuario en el formulario

    // Validar
    const { nombre, correo, telefono, mensaje } = req.body;

    // revisar si hay campos vacios
    const camposVacios = [nombre, correo, telefono, mensaje].some(
        (campo) => campo === ""
    );

    if (camposVacios) {
        console.error("Todos los campos son obligatorios");
        return;
    }
};

export { guardarTestimonial };
