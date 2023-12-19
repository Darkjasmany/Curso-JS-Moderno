// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];
// console.log(tweets);

//Event Listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener("submit", agregarTweet);
}

// Funciones
// Como es un formulario vamos a pasar el evento
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector("#tweet").value;

    // Validacion
    if (tweet === "") {
        mostrarError("Un mensaje no puede ir vacio");
        return; // Evita que se ejecuten más lineas de código, funciona en un if siempre y cuando este en una funcion
    }

    console.log("Agregando Tweet");
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement("P");
    mensajeError.textContent = error;
    mensajeError.classList.add("error");

    // Insertarlo en el contenido
    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}
