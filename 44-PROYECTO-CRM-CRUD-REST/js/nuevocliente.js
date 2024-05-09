import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";

(function () {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const telefono = document.querySelector("#telefono").value;
        const empresa = document.querySelector("#empresa").value;

        // Validar el formulario
        // Se recomienda crear un Objeto para nuestro cliente
        const cliente = {
            // esto es igual que poner nombre: nombre, telefono: telefono xq se llaman igual los campos
            nombre,
            email,
            telefono,
            empresa,
        };
        // Luego validar los valores del arreglo que no esten vacios, en el every revisar si al menos de 1 esta vacio retorna un false, pero como la negamos si uno esta vacio muestra true y si todos estan llenos muestra false
        // console.log(!Object.values(cliente).every((input) => input !== ""));
        if (validar(cliente)) {
            // Mostrar un mensaje
            // console.log("Todos los campos son obligatorios");
            mostrarAlerta("Todos los campos son obligatorios");
            return;
        }
        // console.log("Si se paso la validación");
        nuevoCliente(cliente);
    }

    function validar(Obj) {
        return !Object.values(Obj).every((input) => input !== "");
    }
})();
