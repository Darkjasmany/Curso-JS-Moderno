import { generarIds } from "./funciones.js";

let editando = { value: false };

// Objeto de Cita
const citaObj = {
    id: generarIds(),
    paciente: "",
    propietario: "",
    telefono: "",
    email: "",
    fechaIngreso: "",
    hora: "",
    fecha: "",
    sintomas: "",
};

export { editando, citaObj };
