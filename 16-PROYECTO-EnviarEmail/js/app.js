// Esto se ejecuta una vez que todo nuestro HTML se haya descargado
document.addEventListener("DOMContentLoaded", function () {
    // Variables
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    // console.log(mensaje);

    // Asinar eventos
    // blur - es disparado cuando un elemento ha perdido su foco
    // input - es disparado cuando estas escribiendo, mas para una validación en tiempo real
    //no se pone parentesis porque sino la mandas a llamar, pero sin parentesis se la llama solo cuando se ejecuta este envento
    //function (e) {
    // console.log(e.target.value); // value es no es una propiedad es del DOM de JS, aqui ya tenemos el valor del Email mostrado en consola
    //});

    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);

    // Funciones
    // El evento se ejecuta igual, aca recibe como parametro ese evento
    function validar(e) {
        // console.log(e.target.value); // Leer lo que fue ingresado en un campo
        // trim elimina espacios vacios
        if (e.target.value.trim() === "") {
            console.log("No hay nada");
        } else {
            console.log("Si hay");
        }
    }
});
