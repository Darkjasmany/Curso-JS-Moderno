import { formulario } from "../selectores.js";

class Notificacion {
    constructor({ texto, tipo }) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar() {
        // Crear la notificacion
        const alerta = document.createElement("DIV");
        alerta.classList.add(
            "alert",
            "text-center",
            "w-full",
            "p-3",
            "text-white",
            "my-5",
            "uppercase",
            "font-blod",
            "text-sm"
        );

        // Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector(".alert");
        alertaPrevia?.remove(); // si existe una alerta la elimina, ? es un condicinal

        // Si el tipo es error, agrega una clase
        this.tipo === "error"
            ? alerta.classList.add("bg-red-500")
            : alerta.classList.add("bg-green-500");

        // Mensaje de error
        alerta.textContent = this.texto;

        // Insertarla en el DOM
        // parentElement, hace que vaya al elemento padre, indicamos que quiero introducir la alerta antes del formulario
        formulario.parentElement.insertBefore(alerta, formulario);

        // Quitar alerta despues de un tiempo
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export default Notificacion;
