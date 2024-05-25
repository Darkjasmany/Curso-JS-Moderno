// Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

const formulario = document.querySelector("#formulario-cita");

// Eventos
pacienteInput.addEventListener("change", datosCita);
propietarioInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

formulario.addEventListener("submit", submitCita);

// Objeto de Cita
const citaObj = {
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

    citas.agregar(citaObj);
}

function validar(Obj) {
    return !Object.values(Obj).every((input) => input !== "");
}
