// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
const BtnEliminarTweets = document.querySelector(
    "#formulario input[type=reset]"
);

let tweets = [];

// console.log(tweets);

//Event Listeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweets
    formulario.addEventListener("submit", agregarTweet);

    // Eliminar el arreglo de Tweets
    BtnEliminarTweets.addEventListener("click", eliminarTweets);

    // formulario.addEventListener("reset", eliminarTweets);

    // Cuando el documente este cargado en su totalidad, vamos a ejecutar una funcion
    document.addEventListener("DOMContentLoaded", () => {
        tweets = JSON.parse(localStorage.getItem("tweets") || []); // Cuando el documento este listo vamos a leer de localStorage y lo que voy a leer es tweets que esta definido en localStorage si te mara null asignalo como un arreglo vacio

        // console.log(tweets);

        crearHtml(); // Solo se ejecuta si hay algo
    });
}

// Funciones
// Como es un formulario vamos a pasar el evento
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector("#tweet").value;

    // Validacion
    if (tweet === "") {
        mostrarError(
            "Un mensaje no puede ir vacio",
            e.target.parentElement.parentElement.parentElement.parentElement
        );

        return; // Evita que se ejecuten más lineas de código, funciona en un if siempre y cuando este en una funcion
    }

    const tweetObj = {
        id: Date.now(), // Date.now() obtiene la fecha desde 1970 hasta la actual con el milisegundo
        tweet, // En version actuales de JS si la llave y el valor se llaman igual puedes dejar solo 1 y se agregan bien los valores, esto es igual => tweet: tweet,
    };

    // Añadir al arreglo de tweet
    tweets = [...tweets, tweetObj]; // tomamos una copia de los tweets con el spadoperator, y le agregamos el tweet actual lo que el usuario escribe

    // Una vez agregado vamos a crear el HTML
    crearHtml();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error, referencia) {
    limpiarAlerta(referencia);

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

// Limpiar Mensaje de error previo
function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".error");

    if (alerta) {
        alerta.remove();
    }
}

// Muestra un listado de los tweets
function crearHtml() {
    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach((tweet) => {
            // Agregar un boton de eliminar
            const btnEliminar = document.createElement("a");
            btnEliminar.classList.add("borrar-tweet");
            btnEliminar.textContent = "X";

            // Añadir la funcion de eliminar, hay que hacerlo de esta forma cuando se tiene que pasar parametros
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            };

            // Crear el HTML
            const li = document.createElement("li");

            // Añadir el texto
            li.innerHTML = tweet.tweet;

            // Asignar el boton
            li.appendChild(btnEliminar);

            // Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }

    // Activar el boton eleiminar tweets
    if (tweets.length > 2) {
        BtnEliminarTweets.classList.remove("hidden");
        // console.log(activarEliminar);
    } else {
        BtnEliminarTweets.classList.add("hidden");
    }

    sincronizarStorage();
}

// Agrega los tweets actuales a localStorage
function sincronizarStorage() {
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id) {
    // console.log("borrando", id);
    tweets = tweets.filter((tweet) => tweet.id !== id);

    // console.log(tweets);
    crearHtml();
}

// Eliminar Arreglos de Tweets
function eliminarTweets() {
    tweets = [];
    crearHtml();
}

// Limpiar el html
function limpiarHTML() {
    // mientras exista elementos
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild); // Remueve el primer hijo que vaya encontrando
    }
}
