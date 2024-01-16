// Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

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
    const div = document.createElement("div");

    if (tipo === "error") {
        // div.classlist.add("error");
        console.log("error");
    } else {
        // div.classlist.add("correcto");
        console.log("correcto");
    }

    // div.classlist.add("mensaje", "mt-10");
    div.textContent = mensaje;

    // Insertar en el HTML
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.insertBefore(div, document.querySelector("#resultado")); // nuevo nodo, y el nodo de referencia donde quieres insertarlo
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

    if (marca == "" || year == "" || tipo == "") {
        console.log("No paso la validadcion");
        ui.mostrarMensaje("Todos los campos son obligatorios", "error");
    } else {
        console.log("Si paso la validadcion");
    }

    // console.log("cotizando");
}
