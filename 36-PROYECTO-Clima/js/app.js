const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

// load es muy similar a DOMContentLoaded, solo que el primero es en windows y el segundo es en document
window.addEventListener("load", () => {
    formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    // Validar

    // Consular API
}
