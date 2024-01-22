// Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");
// console.log(gastoListado);

// Eventos
eventListener();
function eventListener() {
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto); // Evento cuando el documento este cargado en su totalidad se ejecuta la funcion

    formulario.addEventListener("submit", agregarGasto);
}

// Classes
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto); // Convierte a numero con Number
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        // console.log(cantidad); // recibe todo el objeto presupuesto

        // Extrayendo los valores
        const { presupuesto, restante } = cantidad;

        // Agregar al HTML
        document.querySelector("#total").textContent = presupuesto;
        document.querySelector("#restante").textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert");

        if (tipo === "error") {
            divMensaje.classList.add("alert-danger");
        } else {
            divMensaje.classList.add("alert-success");
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document
            .querySelector(".primario")
            .insertBefore(divMensaje, formulario);

        // Quitar del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

// Instanciar las clases
const ui = new UI();
let presupuesto; // Esta variable se la crea de manera global para despues instanciarla

// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt("¿Cual es tu presupuesto?");
    // console.log(Number(presupuestoUsuario));

    if (
        presupuestoUsuario === "" ||
        presupuestoUsuario === null ||
        presupuestoUsuario <= 0 ||
        isNaN(presupuestoUsuario) // si el resul es NaN no es un numero es una letra
    ) {
        window.location.reload(); // Recarga la pagina nuevamente
    }

    // Presupuesto valido, se procede a Instanciarlo
    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    // como es un submit le vamos a pasar e
    e.preventDefault();

    // Leer datos del formulario
    const nombre = document.querySelector("#gasto").value;
    const cantidad = document.querySelector("#cantidad").value;

    // Validar
    if (nombre === "" || cantidad === "") {
        ui.imprimirAlerta("Ambos campos son obligatorios", "error");
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta("Cantidad no valida", "error");
        return;
    }

    console.log("Agregando Gasto");
}
