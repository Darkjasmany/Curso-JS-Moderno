// Esto se ejecuta una vez que todo nuestro HTML se haya descargado
document.addEventListener("DOMContentLoaded", function () {
    // VARIABLES
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    // console.log(formulario);

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

    // FUNCIONES
    // El evento se ejecuta igual, aca recibe como parametro ese evento
    function validar(e) {
        // console.log(e.target.parentElement); // Envio a la consola el div que es el elemento padre del input
        // console.log(e.target.id); // revisa el id de los elementos selccionados
        // console.log(e.target.value); // Leer lo que fue ingresado en un campo
        // trim elimina espacios vacios
        if (e.target.value.trim() === "") {
            mostrarAlerta(
                `El campo ${e.target.id} es obligatorio`,
                e.target.parentElement
            );
        } else {
            console.log("Si hay");
        }
    }

    function mostrarAlerta(mensaje, referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector(".alerta"); //referncia es el div padre
        // console.log(alerta);
        if (alerta) {
            alerta.remove(); // Esta eliminando la alerta previa
        }

        // Generar una alerta con HTML con Scripting JS
        const error = document.createElement("P"); // Recomendacion la etiqueta ponerlas en mayusculas
        error.textContent = mensaje; //Poner texto
        error.classList.add(
            "bg-red-600",
            "text-white",
            "p-2",
            "text-center",
            "alerta" // clase solo para las alertas
        );
        // console.log(error);

        // Inyectar el error al formulario
        referencia.appendChild(error); // Mostrando la alerta junto a su campo
        // formulario.appendChild(error); // aregar hasta el final un elemento(hijo) a uno ya existente (papa)
        // formulario.innerHTML = error.innerHTML; // Este remplaza todo el contenido
    }
});
