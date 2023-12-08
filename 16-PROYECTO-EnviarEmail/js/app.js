// Esto se ejecuta una vez que todo nuestro HTML se haya descargado
document.addEventListener("DOMContentLoaded", function () {
    // VARIABLES

    // Este arreglo tiene que llamarse igual al que el id
    const email = {
        email: "",
        asunto: "",
        mensaje: "",
        CC: "",
    };

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputCC = document.querySelector("#CC");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector("#formulario button[type=submit]");
    const btnReset = document.querySelector("#formulario button[type=reset]");
    const spinner = document.querySelector("#spinner");
    // console.log(inputCC);

    // Asinar eventos
    // blur - es disparado cuando un elemento ha perdido su foco
    // input - es disparado cuando estas escribiendo, mas para una validación en tiempo real
    //no se pone parentesis porque sino la mandas a llamar, pero sin parentesis se la llama solo cuando se ejecuta este envento
    //function (e) {
    // console.log(e.target.value); // value es no es una propiedad es del DOM de JS, aqui ya tenemos el valor del Email mostrado en consola
    //});

    inputEmail.addEventListener("input", validar);
    inputCC.addEventListener("input", validar);
    inputAsunto.addEventListener("input", validar);
    inputMensaje.addEventListener("input", validar);

    formulario.addEventListener("submit", enviarEmail);

    btnReset.addEventListener("click", function (e) {
        e.preventDefault(); // previene el comportamiento por defecto del reset
        resetFormulario();
    });

    // FUNCIONES

    function enviarEmail(e) {
        e.preventDefault();
        // console.log("enviando"); // se ejecuta cuando se de click al boton enviar
        spinner.classList.add("flex");
        spinner.classList.remove("hidden");

        setTimeout(() => {
            spinner.classList.remove("flex");
            spinner.classList.add("hidden");

            resetFormulario();

            alertaExito(); //
        }, 3000);
    }

    // El evento se ejecuta igual, aca recibe como parametro ese evento
    function validar(e) {
        // console.log(e.target.parentElement); // Envio a la consola el div que es el elemento padre del input
        // console.log(e.target.id); // revisa el id de los elementos selccionados
        //console.log(e.target.value); // Leer lo que fue ingresado en un campo
        // trim elimina espacios vacios
        // console.log(e.target.value.trim());
        // Leer
        // console.log(e.target.id); //
        if (e.target.value.trim() === "" && e.target.id !== "CC") {
            // No entra a la validacion del campo obligatorio para el elemento de Copia
            mostrarAlerta(
                `El campo ${e.target.id} es obligatorio`,
                e.target.parentElement
            );
            email[e.target.name] = "";
            comprobarEmail();
            return; // Detiene ejeccion del codigo
        }

        // Este If valida si el email tanto del destino como del copia son validos
        // console.log(e.target.value);
        // se niega para que se muestre cuando no se pase la validacion
        if (e.target.id === "email" && !validarEmail(e.target.value)) {
            //Este if infico si el campo email esta vacio como no es obligatorio para la CC lo niego para pasar la validacion que no es valido
            // console.log(e.target.value);
            // if (e.target.id === "CC" && !e.target.value === "") {
            mostrarAlerta("El email no es valido", e.target.parentElement);
            email[e.target.name] = "";
            comprobarEmail();
            return; // Detiene
            // }
        }

        if (e.target.id === "CC" && !validarEmail(e.target.value)) {
            //Este if infico si el campo email esta vacio como no es obligatorio para la CC lo niego para pasar la validacion que no es valido
            // console.log(e.target.value);
            // if (e.target.id === "CC" && !e.target.value === "") {
            mostrarAlerta("El email no es valido", e.target.parentElement);
            email[e.target.name] = "";
            comprobarEmail();
            return; // Detiene
            // }
        }

        limpiarAlerta(e.target.parentElement);
        // console.log("Despues del IF");

        // Asignar los valores
        email[e.target.id] = e.target.value.trim().toLowerCase(); // Elimina espacios y que todo este en minuscula
        // console.log(email);

        // Comprobar el objeto de email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

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

    function limpiarAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector(".alerta"); //referncia es el div padre
        // console.log(alerta);
        if (alerta) {
            alerta.remove(); // Esta eliminando la alerta previa
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email); // metodo para comprobar con la expresion true or false
        // console.log(resultado);
        return resultado;
    }

    function comprobarEmail() {
        // console.log(Object.values(email).includes('')); // va a tomar todos los valores del objeto y los va asignar en un arreglo y ahi mismo con .include a a revisar si alguno tiene algun vacio muestra true hasta que no esten vacio muestra false

        if (Object.values(email).includes("")) {
            btnSubmit.classList.add("opacity-50");
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove("opacity-50");
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        //reiniciar el objeto
        email.email = "";
        email.asunto = "";
        email.mensaje = "";
        // email.CC = "";

        formulario.reset(); // Este .reset existe en formulario
        comprobarEmail();
    }

    function alertaExito() {
        // Crear una alerta
        const alertaExito = document.createElement("P");
        alertaExito.classList.add(
            "bg-green-500",
            "text-white",
            "p-2",
            "text-center",
            "rounded-lg",
            "mt-10",
            "font-bold",
            "text-sm",
            "uppercase"
        );
        alertaExito.textContent = "Mensaje enviado correctamente";
        formulario.appendChild(alertaExito);

        setTimeout(() => {
            alertaExito.remove();
        }, 3000);
    }
});
