// VARIABLES
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// Contenedor para los resultados
const resultado = document.querySelector("#resultado");

// Obtencion de años para filtros
const yearMax = new Date().getFullYear(); // Año actual
const yearMin = yearMax - 10;

// Generar un objeto con la busqueda de acuerdo a todos los parametros de busqueda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
};

// EVENTOS QUE SE EJECUTARAN CUANDO CARGUE TODO EL HTML
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(); // Muestra los automaviles al cargar todo el HTML

    llenarSelectYear(); // LLena las opciones de Años
});

// Event listener para los select de busqueda
marca.addEventListener("change", (e) => {
    // console.log(e.target.value); // Recibiendo el evento puedo ver el valor que se selecciono
    datosBusqueda.marca = e.target.value;
});

year.addEventListener("change", (e) => {
    datosBusqueda.year = e.target.value;
});

minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
    // console.log(datosBusqueda);
});

// FUNCIONES
function mostrarAutos() {
    // Iterar sobre el arreglo de autos que simula la base de datos
    autos.forEach((auto) => {
        // Aplicamos Destrocturing para evitar definir los campos así ${auto.marca}
        const { marca, modelo, year, precio, puertas, color, transmision } =
            auto;
        const autoHTML = document.createElement("P");
        autoHTML.textContent = `
          ${marca} - ${modelo} - ${year} - ${puertas} Puertas - ${color} - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color} 
    `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}

// Genera los años del select
function llenarSelectYear() {
    // Este for corre del año actual hacia atras, me interesa que en el Select se visualice primero el año actual
    for (let i = yearMax; i >= yearMin; i--) {
        // console.log(i); // 2023 hasta el 2013
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
}

// Prueba
