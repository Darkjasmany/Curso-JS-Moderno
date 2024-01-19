// Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");
// console.log(gastoListado);

// Eventos
eventListener();
function eventListener() {
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto); // Evento cuando el documento este cargado en su totalidad se ejecuta la funcion
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
