let cliente = {
    mesa: "",
    hora: "",
    pedido: [],
};

const btnGuardarCliente = document.querySelector("#guardar-cliente");

btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector("#mesa").value;
    const hora = document.querySelector("#hora").value;

    // revisar si hay campos vacios
    const camposVacios = [mesa, hora].some((campo) => campo === "");

    if (camposVacios) {
        alerta("Todos los campos son obligatorios");
        return;
    }

    // Asignar datos del formulario al arreglo de cliente
    // Tome una copia del arreglo y despues rescriba la mesa y la hora
    cliente = { ...cliente, mesa, hora };
    // console.log(cliente);

    // Ocultar modal
    const modalFormulario = document.querySelector("#formulario");
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario); // obtener el modal actual que tenemos
    modalBootstrap.hide(); // metodo para ocultarlo

    // Mostrar las secciones
    mostrarSecciones();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll(".d-none"); // devuelve como un arreglo por eso hacemos el recorrido con el foreach
    seccionesOcultas.forEach((seccion) => seccion.classList.remove("d-none"));
}

function alerta(mensaje) {
    // Verificar si ya hay una alerta
    const existeAlerta = document.querySelector(".invalid-feedback");

    if (!existeAlerta) {
        const alerta = document.createElement("DIV");
        alerta.classList.add("invalid-feedback", "d-block", "text-center"); // clases de bootstrap
        alerta.textContent = mensaje;
        document.querySelector(".modal-body form").appendChild(alerta);

        // Eliminar la alerta
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}
