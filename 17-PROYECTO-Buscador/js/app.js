// VARIABLES
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");
const yearMax = new Date().getFullYear(); // Año actual
const yearMin = yearMax - 10;

// EVENTOS QUE SE EJECUTARAN CUANDO CARGUE TODO EL HTML
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(); // Muestra los automaviles al cargar todo el HTML

    llenarSelectYear(); // LLena las opciones de Años
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
