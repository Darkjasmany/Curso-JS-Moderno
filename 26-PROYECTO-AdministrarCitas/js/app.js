// Variables
// Campos del formulario
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

// UI
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

// Registrar Eventos
eventListeners();
function eventListeners() {
    // Leer los cambios realizados en los inputs
    mascotaInput.addEventListener("input", datosCita);
    propietarioInput.addEventListener("input", datosCita);
    telefonoInput.addEventListener("input", datosCita);
    fechaInput.addEventListener("input", datosCita);
    horaInput.addEventListener("input", datosCita);
    sintomasInput.addEventListener("input", datosCita);
}

// Objeto con la informacion de la cita
const citasObj = {
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: "",
};

// Funciones
// Agrega datos al objeto de cita
function datosCita(e) {
    // console.log(e.target.name); Para obtner la propiedad name, esto funciona si en el html tiene definido el name con el mismo nombre de las propiedades del objeto
    citasObj[e.target.name] = e.target.value; // Escribe sobre el objeto
    console.log(citasObj);
}
