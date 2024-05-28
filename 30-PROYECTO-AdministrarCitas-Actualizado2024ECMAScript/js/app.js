import {
    pacienteInput,
    propietarioInput,
    telefonoInput,
    emailInput,
    fechaIngresoInput,
    horaInput,
    fechaInput,
    sintomasInput,
    formulario,
} from "./selectores.js";

import { datosCita, submitCita } from "./funciones.js";

// Eventos
pacienteInput.addEventListener("change", datosCita);
propietarioInput.addEventListener("change", datosCita);
telefonoInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
fechaIngresoInput.addEventListener("change", datosCita);
horaInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

formulario.addEventListener("submit", submitCita);
