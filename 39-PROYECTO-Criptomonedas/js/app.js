const criptomonedasSelect = document.querySelector("#criptomonedas");
const formulario = document.querySelector("#formulario");

// Crear un Promise que descarga todas las criptomonedas
// El cual se va a ejecutar solamente si puede descargar todas las criptomonedas
const obtenerCriptomonedas = (criptomonedas) =>
    new Promise((resolve) => {
        // En caso que sea correcto
        resolve(criptomonedas);
    });

// Una ves que el docuento esta listo, vamos a cargar las criptomonedas
document.addEventListener("DOMContentLoaded", () => {
    consultarCriptomonedas();

    formulario.addEventListener("submit", listener);
});

function consultarCriptomonedas() {
    const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => obtenerCriptomonedas(resultado.Data))
        .then((criptomonedas) => selectCriptomonedas(criptomonedas));
}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach((criptomoneda) => {
        // console.log(criptomoneda);
        const { FullName, Name } = criptomoneda.CoinInfo;
        // console.log(FullName);

        const option = document.createElement("OPTION");
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
        // console.log(option);
    });
}
