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

    nuevoGasto(gasto) {
        // console.log(gasto);
        this.gastos = [...this.gastos, gasto]; // tomamos una copia de gasto, y agregamos el nuevo gasto al final
        // console.log(this.gastos);
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce(
            (total, gasto) => total + gasto.cantidad,
            0
        ); // Itera sobre todos los valores del arreglo
        // console.log(gastado);

        this.restante = this.presupuesto - gastado;
        // console.log(this.restante);
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
        this.calcularRestante();
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

    mostrarGastos(gastos) {
        // Elimina el HTML previo
        this.limpiarHTML();
        // console.log(gastos);

        // Iterar sobre los gastos
        gastos.forEach((gasto) => {
            // console.log(gasto);
            const { cantidad, nombre, id } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement("li");
            nuevoGasto.className =
                "list-group-item d-flex justify-content-between align-items-center"; // Asignar un valor diferente a la classe
            // nuevoGasto.setAttribute("data-id", id); // Esto hace lo mismo de abajo
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad}</span> `;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement("button");
            btnBorrar.classList.add("btn", "btn-danger", "btn-gasto");
            btnBorrar.innerHTML = "Borrar &times";
            btnBorrar.onclick = () => {
                // console.log(id);
                eliminarGasto(id);
            };
            nuevoGasto.appendChild(btnBorrar);

            // Agregar el HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante) {
        document.querySelector("#restante").textContent = restante;
    }

    // Cambia de color el presupuesto restante
    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector(".restante");

        // console.log(restante);
        // console.log( presupuesto);

        // Comprobar el 25%
        if (presupuesto / 4 > restante) {
            restanteDiv.classList.remove("alert-success", "alert-warning");
            restanteDiv.classList.add("alert-danger");
        } else if (presupuesto / 2 > restante) {
            restanteDiv.classList.remove("alert-success");
            restanteDiv.classList.add("alert-warning");
        } else {
            restanteDiv.classList.remove("alert-danger", "alert-warning");
            restanteDiv.classList.add("alert-success");
        }

        // Si presupuesta es igual a 0
        if (restante <= 0) {
            ui.imprimirAlerta("El presupuesto se ha agotado", "error");
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
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
    const cantidad = Number(document.querySelector("#cantidad").value);

    // Validar
    if (nombre === "" || cantidad === "") {
        ui.imprimirAlerta("Ambos campos son obligatorios", "error");
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta("Cantidad no valida", "error");
        return;
    }

    // Generar un objeto de tipo Gasto
    // aqui une nombre y cantidad a gasto
    const gasto = {
        nombre,
        cantidad,
        id: Date.now(),
    };

    // Añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);
    // console.log(gasto);

    // Mensaje de todo bien
    ui.imprimirAlerta("Gasto agregado Correctamente");

    // imprimiar los gastos
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    // Reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id) {
    // console.log(id);

    // Elimina del Objeto
    presupuesto.eliminarGasto(id);

    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
}
