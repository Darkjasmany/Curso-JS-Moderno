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
    mostrarAutos(autos); // Muestra los automaviles al cargar todo el HTML

    llenarSelectYear(); // LLena las opciones de Años

    llenarSelectMarca(autos);

    llenarSelectColor(autos);
});

// Event listener para los select de busqueda
marca.addEventListener("change", (e) => {
    // console.log(e.target.value); // Recibiendo el evento puedo ver el valor que se selecciono
    datosBusqueda.marca = e.target.value;
    filtrarAuto(); // Funcion que se llama para filtrar el contenido cada vez que exista una seleccion o cambio en el select
});

year.addEventListener("change", (e) => {
    datosBusqueda.year = parseInt(e.target.value); // Todo resultado que viene del formulario es un String, en este caso la fecha es un number por eso lo convertimos para poder hacer las comparaciones necesarias
    // console.log(typeof datosBusqueda.year);
    filtrarAuto();
});

minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    // console.log(datosBusqueda);
});

// FUNCIONES
function mostrarAutos(autos) {
    // Elimina el HTML previo
    limpiarHTML();

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

// Limpiar el HTML
function limpiarHTML() {
    //miestras haya algo
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
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

function llenarSelectMarca(autos) {
    // console.log(autos);

    const unicaMarca = [];

    autos.forEach((auto) => {
        if (!unicaMarca.includes(auto.marca)) {
            // console.log(!unicaMarca.includes(auto.marca)); // Reviso si mi nuevo arreglo incluye la marca del arreglo maxivo de auto, la primera vez es false si no la niego, pero negando va ingresando marca con marca con el push evitando duplicados
            unicaMarca.push(auto.marca);
        }
    });

    // console.log(unicaMarca); // aqui tengo el arreglo nuevo de marcas depurado los repetidos
    // console.log(marca);

    unicaMarca.forEach((unicaMarca) => {
        // console.log(unicaMarca);
        const options = document.createElement("option");
        options.value = unicaMarca;
        options.textContent = unicaMarca;
        marca.appendChild(options);
    });
}

// Desde aqui estoy tranatando de mejorar la funcionalidad
function llenarSelectColor(autos) {
    const { color } = autos;
    const uniqueColor = [];

    autos.forEach((auto) => {
        const { color } = auto;
        // return;
        if (!uniqueColor.includes(color)) {
            uniqueColor.push(color);
        }
    });

    // console.log(color);
    console.log(uniqueColor);
}

// Optimizando la funcion llenar select
function llenarSelect(arregloFiltrado, idSelect) {
    console.log(arregloFiltrado);
    console.log(idSelect);

    arregloFiltrado.forEach((unicoElemento) => {
        const options = document.createElement("option");
        options.value = unicoElemento;
        options.textContent = unicoElemento;
        idSelect.appendChild(options);
    });
}
//Hasta aca

// Funcion que filtra en base a la busqueda
function filtrarAuto() {
    // console.log("Filtrando");
    // Esto es una funcion de alto nivel, es una funcion que recibe como parametro otra funcion, antes el parametro de filter era un arrofunction que recibia el parametro de busqueda el arreglo autos que es el que simula nuestra bd

    // Estos metodos soportar el changing encadenamiento de JS
    const resultado = autos
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);

    // console.log(resultado);

    // Si hay algo muestra los automaviles
    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    // Limpiar el HTML
    limpiarHTML();

    // Agrego el mensaje de no hay resultado
    const noResultado = document.createElement("DIV");
    noResultado.classList.add("alerta", "error");
    noResultado.textContent =
        "No Hay Resultados, Intenta con otros terminos de busqueda";
    resultado.appendChild(noResultado); // sobre el resultado definimos el el mensaje ya que no se estara llenando con el arreglo de autos
}

function filtrarMarca(auto) {
    // console.log("marca");
    // console.log(datosBusqueda); // aqui veo todos los autos con el filtrado de la marca que yo defini en el select
    // hago destrocturing al arreglo datosBusqueda que contiene lo que filtr para seleccionar solo la marca
    const { marca } = datosBusqueda;

    // Si existe la marca seleccionada, cargo todos los autos de esa marca
    if (marca) {
        return auto.marca === marca;
    }

    // si no hay muestro todos los autos
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    // console.log(typeof year); // Este viene como String, antes de hacer la conversion
    // console.log(typeof auto.year); // Este viene como Number
    if (year) {
        return auto.year === year;
    }

    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }

    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    // console.log(typeof puertas); // Este viene como String, antes de hacer la conversion
    // console.log(typeof auto.puertas); // Este viene como Number

    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;

    if (color) {
        return auto.color === color;
    }

    return auto;
}
