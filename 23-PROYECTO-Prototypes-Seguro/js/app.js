// Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function () {
    // console.log(this.marca);
    /*
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
    */
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case "1":
            cantidad = base * 1.15;
            break;
        case "2":
            cantidad = base * 1.05;
            break;
        case "3":
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    // Leer el año actual y traer la diferencia considerando el año seleccionado
    const diferencia = new Date().getFullYear() - this.year;

    // Cada año que la diferencia es mayr, el costo va a reducirse el 3%
    cantidad -= (diferencia * 3 * cantidad) / 100;

    // Si el seguro es basico se multiplica por un 30% más
    // Si el seguro es basico se multiplica por un 50% más
    if (this.tipo === "basico") {
        cantidad *= 1.3;
    } else {
        cantidad *= 1.5;
    }

    return cantidad;
};

function UI() {}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector("#year");
    for (let i = max; i > min; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
};

// Muestra alertas en pantalla
// se usa el arroy function porque este prototype no hace referencia a this, ya que UI no recibe nada
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    limpiarAlerta();
    const div = document.createElement("div");

    if (tipo === "error") {
        div.classList.add("mensaje", "error");
    } else {
        div.classList.add("mensaje", "correcto");
    }

    div.classList.add("mensaje", "mt-10");
    div.textContent = mensaje;

    // Insertar en el HTML
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.insertBefore(div, document.querySelector("#resultado")); // nuevo nodo, y el nodo de referencia donde quieres insertarlo

    setTimeout(() => {
        div.remove();
    }, 3000);
};

function limpiarAlerta() {
    const alerta = document.querySelector(".error");
    // console.log(alerta);

    if (alerta) {
        alerta.remove();
    }
}

UI.prototype.mostrarResultado = (total, seguro) => {
    // Crear el resultaod
    const div = document.createElement("div");
    div.classList.add("mt-10");

    div.innerHTML = `
    <p class="header">Tu Resumen</p>
    <p class="font-bold">Total: ${total}</p>
    `;

    const resultadoDiv = document.querySelector("#resultado");
    resultadoDiv.appendChild(div);
};

// Instanciar UI
const ui = new UI();
// console.log(ui);

document.addEventListener("DOMContentLoaded", () => {
    ui.llenarOpciones(); // Llena el selecy con los años
});

eventListeners();
function eventListeners() {
    const formulario = document.querySelector("#cotizar-seguro");
    // console.log(formulario);
    formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector("#marca").value;

    // Leer el año seleccionado
    const year = document.querySelector("#year").value;

    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name= "tipo"]:checked').value;
    // console.log(tipo);

    if (marca === "" || year === "" || tipo === "") {
        // console.log("No paso la validadcion");
        ui.mostrarMensaje("Todos los campos son obligatorios", "error");
        // ui.limpiarAlerta();
        return;
    }

    ui.mostrarMensaje("Cotizando...", "exito");

    // Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    // Utilizar el prototype que va a cotizar
    ui.mostrarResultado(total, seguro);
}
