import Notificacion from "./classes/Notificacion.js";
import AdminCitas from "./classes/AdminCitas.js";
import { citaObj, editando } from "./variables.js";
import {
    formulario,
    formularioInput,
    pacienteInput,
    propietarioInput,
    emailInput,
    fechaIngresoInput,
    fechaInput,
    horaInput,
    telefonoInput,
    sintomasInput,
} from "./selectores.js";

const citas = new AdminCitas();

// Funcion para mapear los value de los input en nuestro objeto de Cita
export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

export function submitCita(e) {
    e.preventDefault(); // Para prevenir el evento de un metodo post o dirige a otra url

    // Para validar que todos los campos no esten vacios
    // if (Object.values(citaObj).some(valor => valor.trim()==='')) {
    //      console.log("Todos los campos son obligatorios");
    // }
    if (validar(citaObj)) {
        // Mostrar un mensaje
        new Notificacion({
            texto: "Todos los campos son obligatorios",
            tipo: "error",
        });
        return;
    }

    // console.log(citaObj);

    if (editando.value) {
        // console.log("editando registro");
        citas.editar({ ...citaObj });
        new Notificacion({
            texto: "Guardado Correctamente",
            tipo: "exito",
        });
    } else {
        // Almacenamos en el objeto una copia de citaObj para que no rescriba el objeto anterior
        citas.agregar({ ...citaObj });

        // Agregar una notificación de exito
        new Notificacion({
            texto: "Paciente Registrado",
            tipo: "exito",
        });
    }

    // Reiniciar el formulario y el objetoCita
    formulario.reset();
    reinciarObjetoCita();
    formularioInput.value = "Registrar Paciente";
    editando.value = false;
}

function validar(Obj) {
    return !Object.values(Obj).every((input) => input !== "");
}

export function reinciarObjetoCita() {
    // Reinicar el objeto Primera forma
    citaObj.id = generarIds();
    citaObj.paciente = "";
    citaObj.propietario = "";
    citaObj.telefono = "";
    citaObj.email = "";
    citaObj.fechaIngreso = "";
    citaObj.hora = "";
    citaObj.fecha = "";
    citaObj.sintomas = "";

    // Reiniciar el objeto segunda forma
    /*
    Object.assign(
        (citaObj = {
            id: generarIds(),
            paciente: "",
            propietario: "",
            telefono: "",
            email: "",
            fechaIngreso: "",
            hora: "",
            fecha: "",
            sintomas: "",
        })
    );
*/
    // Esta forma es lo mismo que la otra
}

export function generarIds() {
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita) {
    // Escribimos en el objeto
    Object.assign(citaObj, cita);

    // Como en el HTML
    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    telefonoInput.value = cita.telefono;
    emailInput.value = cita.email;
    fechaIngresoInput.value = cita.fechaIngreso;
    horaInput.value = cita.hora;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando.value = true;

    formularioInput.value = "Guardar Cambios";
}
