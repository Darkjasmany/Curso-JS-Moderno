// Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

const formulario = document.querySelector("#formulario-cita");

// Eventos
pacienteInput.addEventListener("change", datosCita);
propietarioInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

formulario.addEventListener("submit", submitCita);

// Objeto de Cita
const citaObj = {
    paciente: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
};

// Funcion para mapear los value de los input en nuestro objeto de Cita
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

function submitCita(e) {
    e.preventDefault(); // Para prevenir el evento de un metodo post o dirige a otra url

    if (validar(citaObj)) {
        // Mostrar un mensaje
        // console.log("Todos los campos son obligatorios");
        mostrarAlerta("Todos los campos son obligatorios");
        return;
    }
}

function validar(Obj) {
    return !Object.values(Obj).every((input) => input !== "");
}

function mostrarAlerta(mensaje) {
    const alerta = document.querySelector(".bg-red-100");

    // Si no hay una alerta previa genera 1
    if (!alerta) {
        const alerta = document.createElement("P");
        alerta.classList.add(
            "bg-red-100",
            "border-red-400",
            "text-red-700",
            "px-4",
            "py-3",
            "rounded",
            "max-w-lg",
            "mx-auto",
            "mt-6",
            "text-center"
        );
        alerta.innerHTML = `
          <strong class="font-bold">Error!</strong>
          <span class="block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector("#formulario-cita");
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}
