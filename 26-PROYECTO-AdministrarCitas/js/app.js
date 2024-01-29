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

let editando;

// Clases
class Citas {
    // Constructor
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita]; // cogemos una copia del arreglo de citas y le pasamos la cita nueva
        // console.log(this.citas);
    }

    eliminarCita(id) {
        this.citas = this.citas.filter((cita) => cita.id != id); // quita 1 elemento y mantiene los otros segun la condicion
    }

    editarCita(citaActualizada) {
        this.citas = this.citas.map((cita) =>
            cita.id === citaActualizada.id ? citaActualizada : cita
        ); // se recorre los elementos del arreglo, map crea un nuevo arreglo que se va asignar, se valida que el id sea el mismo de la citaactualizada, en caso de ser verdadero se la rempleaza por el nuevo arreglo en caso contrario dejamos la misma cita
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        this.limpiarAlerta();
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

        //Agregar clase en base al tipo de error
        if (tipo == "error") {
            divMensaje.classList.add("alert-danger");
        } else {
            divMensaje.classList.add("alert-success");
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document
            .querySelector("#contenido")
            .insertBefore(divMensaje, document.querySelector(".agregar-cita"));

        // Quitar la alerta despues de 3 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    // Para que no visualice muchos div con la alerta
    limpiarAlerta() {
        const alerta = document.querySelector(".alert");
        if (alerta) {
            alerta.remove();
        }
    }

    imprimirCita({ citas }) {
        this.limpiarHTML();
        // Se puede hacer destrocturing desde los parametros y accedemos directamente al arreglo definido en el objeto
        // console.log(citas);
        citas.forEach((cita) => {
            const {
                mascota,
                propietario,
                telefono,
                fecha,
                hora,
                sintomas,
                id,
            } = cita;

            const divCita = document.createElement("div");
            divCita.classList.add("cita", "p-3");
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement("h2");
            mascotaParrafo.classList.add("card-title", "font-weight-bolder");
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement("p");
            propietarioParrafo.innerHTML = `
                <span class="font-weigth-bolder">Propietario: </span> ${propietario}
            `;
            const telefonoParrafo = document.createElement("p");
            telefonoParrafo.innerHTML = `
                <span class="font-weigth-bolder">Telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement("p");
            fechaParrafo.innerHTML = `
                <span class="font-weigth-bolder">Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement("p");
            horaParrafo.innerHTML = `
                <span class="font-weigth-bolder">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement("p");
            sintomasParrafo.innerHTML = `
                <span class="font-weigth-bolder">Sintomas: </span> ${sintomas}
            `;

            // Boton para eliminar esta cita
            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("btn", "btn-danger", "mr-2");
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
`;
            btnEliminar.onclick = () => eliminarCita(id);

            // Boton para editar una cita
            const btnEditar = document.createElement("button");
            btnEditar.classList.add("btn", "btn-info", "mr-2");
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
`;
            btnEditar.onclick = () => editarCita(cita);

            // Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            // Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

//Instanciar de forma Global
const ui = new UI();
const administrarCitas = new Citas();

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

    formulario.addEventListener("submit", nuevaCita);
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
    // console.log(citasObj);
}

// Valida y agrega una nueva cita a la clase de Citas
function nuevaCita(e) {
    e.preventDefault();

    // Extraer la informacion del obhjeto de citas
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citasObj;

    // Validar
    if (
        mascota === "" ||
        propietario === "" ||
        telefono === "" ||
        fecha === "" ||
        hora === "" ||
        sintomas === ""
    ) {
        ui.imprimirAlerta("Todos los campos son obligatorios", "error");
        return;
    }

    if (editando) {
        // Muestra el mensaje
        ui.imprimirAlerta("La cita fue actualizada con exito");

        // Pasar el objeto de la cita
        administrarCitas.editarCita({ ...citasObj });

        // Regresar el texto del boton a su estado original
        formulario.querySelector('button[type="submit"]').textContent =
            "Crear Cita";

        // Quitando modo edicion
        editando = false;
    } else {
        // Generar un id uni        ui.imprimirAlerta("Todos los campos son obligatorios", "error");
        citasObj.id = Date.now();

        // Creando una nueva cita con el objeto de citaObj
        // console.log(citasObj);
        administrarCitas.agregarCita({ ...citasObj });

        // Mensaje de Agregado correctamente
        ui.imprimirAlerta("Se agrego correctamente");
    }

    // Reiniciar el objeto para la validacion
    reiniciarObjeto();

    // Reiniciar el formulario
    formulario.reset();

    // Mostrar el HTML de la cita
    ui.imprimirCita(administrarCitas);
}

function reiniciarObjeto() {
    citasObj.mascota = "";
    citasObj.propietario = "";
    citasObj.telefono = "";
    citasObj.fecha = "";
    citasObj.hora = "";
    citasObj.sintomas = "";
}

function eliminarCita(id) {
    // console.log(id);
    // Eliminar la cita
    administrarCitas.eliminarCita(id);

    // Muestre el mensaje
    ui.imprimirAlerta("La cita se elimino correctamente");

    // Refrescar las citas
    ui.imprimirCita(administrarCitas);
}

function editarCita(cita) {
    // console.log(id);
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Llenar el Objeto
    citasObj.mascota = mascota;
    citasObj.propietario = propietario;
    citasObj.telefono = telefono;
    citasObj.fecha = fecha;
    citasObj.hora = hora;
    citasObj.sintomas = sintomas;
    citasObj.id = id;

    // Cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent =
        "Guardar cambios";

    editando = true;
}
