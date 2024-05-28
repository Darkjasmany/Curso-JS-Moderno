import Notificacion from "./classes/Notificacion.js";
import AdminCitas from "./classes/AdminCitas.js";
import {
    pacienteInput,
    propietarioInput,
    telefonoInput,
    emailInput,
    fechaIngresoInput,
    horaInput,
    fechaInput,
    sintomasInput,
} from "./selectores.js";

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

let editando = false;

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

// Funcion para mapear los value de los input en nuestro objeto de Cita
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

const citas = new AdminCitas();

function submitCita(e) {
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

    if (editando) {
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
    editando = false;
}

function validar(Obj) {
    return !Object.values(Obj).every((input) => input !== "");
}

function reinciarObjetoCita() {
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

function generarIds() {
    return Math.random().toString(36).substring(2) + Date.now();
}

function cargarEdicion(cita) {
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

    editando = true;

    formularioInput.value = "Guardar Cambios";
}
