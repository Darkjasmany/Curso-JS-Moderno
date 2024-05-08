const criptomonedasSelect = document.querySelector("#criptomonedas");
const monedaSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

// Se llenan  con que el usuario vaya seleccionado algo
const objBusqueda = {
    moneda: "",
    criptomoneda: "",
};

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

    formulario.addEventListener("submit", submitFormulario);

    criptomonedasSelect.addEventListener("change", leerValor);
    monedaSelect.addEventListener("change", leerValor);
});

async function consultarCriptomonedas() {
    const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    // fetch(url)
    //     .then((respuesta) => respuesta.json())
    //     .then((resultado) => obtenerCriptomonedas(resultado.Data))
    //     .then((criptomonedas) => selectCriptomonedas(criptomonedas));

    // Async Await
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        selectCriptomonedas(criptomonedas);
    } catch (error) {
        console.error(error);
    }
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

function leerValor(e) {
    // se mapean los valores correctamente xq en el html tienen definido los select atributo name
    objBusqueda[e.target.name] = e.target.value;
    // console.log(objBusqueda);
}

function submitFormulario(e) {
    e.preventDefault();

    // validar
    const { moneda, criptomoneda } = objBusqueda;

    if (moneda === "" || criptomoneda === "") {
        mostrarAlerta("Ambos campos son obligatorios");
        return;
    }

    // Consultar la API con los resultados
    consultarAPI();
}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector(".error");

    if (!existeAlerta) {
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("error");

        // Mensaje de error
        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

async function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    // fetch(url)
    //     .then((respuesta) => respuesta.json())
    //     .then((cotizacion) => {
    //         mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    //     });

    // Async Await
    try {
        const respuesta = await fetch(url);
        const cotizacion = await respuesta.json();
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    } catch (error) {
        console.error(error);
    }
}

function mostrarCotizacionHTML(cotizacion) {
    limpiarHTML();

    console.log(cotizacion);
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement("p");
    precio.classList.add("precio");
    precio.innerHTML = `El Precio es: <span> ${PRICE} </span>`;

    const precioAlto = document.createElement("p");
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span> </p>`;

    const precioBajo = document.createElement("p");
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span> </p>`;

    const ultimasHoras = document.createElement("p");
    ultimasHoras.innerHTML = `<p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>`;

    const ultimaActualizacion = document.createElement("p");
    ultimaActualizacion.innerHTML = `<p>Última Actualización: <span>${LASTUPDATE}</span></p>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);

    formulario.appendChild(resultado);
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML();

    const spinner = document.createElement("div");
    spinner.classList.add("spinner");

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>    
    `;

    resultado.appendChild(spinner);
}
