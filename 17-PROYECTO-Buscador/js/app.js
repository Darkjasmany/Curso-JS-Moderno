// VARIABLES
const resultado = document.querySelector("#resultado");

// EVENTOS
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos();
});

// FUNCTIONES
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
