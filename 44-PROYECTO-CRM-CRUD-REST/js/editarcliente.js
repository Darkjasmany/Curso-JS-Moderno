import { mostrarAlerta, validar } from "./funciones.js";
import { obtenerCliente, editarCliente } from "./API.js";

(function () {
    // Campos del formulario
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const telefonoInput = document.querySelector("#telefono");
    const empresaInput = document.querySelector("#empresa");
    const idInput = document.querySelector("#id");

    document.addEventListener("DOMContentLoaded", async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const clienteId = parseInt(parametrosURL.get("id"));
        const cliente = await obtenerCliente(clienteId);
        mostrarCliente(cliente);

        // Submit al formulario
        const formulario = document.querySelector("#formulario");
        formulario.addEventListener("submit", validarCliente);
    });

    function mostrarCliente(cliente) {
        // console.log(cliente);
        const { id, nombre, email, telefono, empresa } = cliente;

        idInput.value = id;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value),
        };

        if (validar(cliente)) {
            // Mostrar un mensaje
            // console.log("Todos los campos son obligatorios");
            mostrarAlerta("Todos los campos son obligatorios");
            return;
        }

        // Rescribe el objeto
        editarCliente(cliente);
    }
})();
