// Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

const formulario = document.querySelector("#formulario-cita");

const contenedorCitas = document.querySelector("#citas");

// Eventos
pacienteInput.addEventListener("change", datosCita);
propietarioInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

formulario.addEventListener("submit", submitCita);

let editando = false;

// Objeto de Cita
const citaObj = {
    id: generarIds(),
    paciente: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
};

class Notificacion {
    constructor({ texto, tipo }) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar() {
        // Crear la notificacion
        const alerta = document.createElement("DIV");
        alerta.classList.add(
            "alert",
            "text-center",
            "w-full",
            "p-3",
            "text-white",
            "my-5",
            "uppercase",
            "font-blod",
            "text-sm"
        );

        // Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector(".alert");
        alertaPrevia?.remove(); // si existe una alerta la elimina, ? es un condicinal

        // Si el tipo es error, agrega una clase
        this.tipo === "error"
            ? alerta.classList.add("bg-red-500")
            : alerta.classList.add("bg-green-500");

        // Mensaje de error
        alerta.textContent = this.texto;

        // Insertarla en el DOM
        // parentElement, hace que vaya al elemento padre, indicamos que quiero introducir la alerta antes del formulario
        formulario.parentElement.insertBefore(alerta, formulario);

        // Quitar alerta despues de un tiempo
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

class AdminCitas {
    constructor() {
        this.citas = [];
    }

    agregar(cita) {
        this.citas = [...this.citas, cita]; // con el expredoperator tomamos una copia de nuestro arreglo de citas y le mandamos la cita
        console.log(this.citas);
        this.mostrar(); // llama el metodo mostrar que renderiza en pantalla
    }

    mostrar() {
        // Limpiar el HTML
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        // Generando las citas
        this.citas.forEach((cita) => {
            const divCita = document.createElement("div");
            divCita.classList.add(
                "mx-5",
                "my-10",
                "bg-white",
                "shadow-md",
                "px-5",
                "py-10",
                "rounded-xl",
                "p-3"
            );

            const paciente = document.createElement("p");
            paciente.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement("p");
            propietario.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const email = document.createElement("p");
            email.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement("p");
            fecha.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const sintomas = document.createElement("p");
            sintomas.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            // Botones de ELIMINAR y EDITAR

            const btnEditar = document.createElement("button");
            btnEditar.classList.add(
                "py-2",
                "px-10",
                "bg-indigo-600",
                "hover:bg-indigo-700",
                "text-white",
                "font-bold",
                "uppercase",
                "rounded-lg",
                "flex",
                "items-center",
                "gap-2",
                "btn-editar"
            );
            btnEditar.innerHTML =
                'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

            // Toma una copia completa del objeto, ya que el forEach solo hace el recorrido del objeto
            // Puede se con el structuredClone o un destrocturing
            const clone = structuredClone(cita);
            // const clone = { ...cita };

            // Event Handler
            btnEditar.onclick = () => {
                cargarEdicion(clone);
            };

            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add(
                "py-2",
                "px-10",
                "bg-red-600",
                "hover:bg-red-700",
                "text-white",
                "font-bold",
                "uppercase",
                "rounded-lg",
                "flex",
                "items-center",
                "gap-2",
                "btn-eliminar"
            );
            btnEliminar.innerHTML =
                'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

            const contenedorBotones = document.createElement("DIV");
            contenedorBotones.classList.add("flex", "justify-between", "mt-10");

            contenedorBotones.appendChild(btnEditar); // Se agrega primero para tenerlo del lado izq
            contenedorBotones.appendChild(btnEliminar);

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);

            contenedorCitas.appendChild(divCita);
        });
    }
}

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

    if (editando) {
        console.log("editando registro");
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
}
function validar(Obj) {
    return !Object.values(Obj).every((input) => input !== "");
}

function reinciarObjetoCita() {
    // Reinicar el objeto Primera forma
    // citaObj.id = generarIds;
    // citaObj.paciente = "";
    // citaObj.propietario = "";
    // citaObj.email = "";
    // citaObj.fecha = "";
    // citaObj.sintomas = "";

    // Reiniciar el objeto segunda forma
    Object.assign(
        (citaObj = {
            id: generarIds(),
            paciente: "",
            propietario: "",
            email: "",
            fecha: "",
            sintomas: "",
        })
    );
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
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando = true;
}
