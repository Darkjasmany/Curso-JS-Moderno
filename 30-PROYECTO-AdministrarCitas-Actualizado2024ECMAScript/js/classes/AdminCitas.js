import { contenedorCitas } from "../selectores.js";
import { cargarEdicion } from "../funciones.js";

export default class AdminCitas {
    constructor() {
        this.citas = [];
    }

    agregar(cita) {
        this.citas = [...this.citas, cita]; // con el expredoperator tomamos una copia de nuestro arreglo de citas y le mandamos la cita
        // console.log(this.citas);
        this.mostrar(); // llama el metodo mostrar que renderiza en pantalla
    }

    editar(citaActualizada) {
        //map itera y puede modificarlos y regresa un arreglo nuevo
        // vamos a recorrer el objeto de cita si cita.id = al id de la cita actualiza devuelve el objeto de citaActilzada, si no devuelve la cita
        // Este codigo lo que hace es iterar sobre las citas que tenemos en pantalla y ese objeto nuevo que llega rescribe el que tenemos y renderizamos una vez mas codifo html
        this.citas = this.citas.map((cita) =>
            cita.id === citaActualizada.id ? citaActualizada : cita
        );
        this.mostrar();
    }

    eliminar(id) {
        // console.log(id);
        this.citas = this.citas.filter((cita) => cita.id !== id);
        this.mostrar();
    }

    mostrar() {
        // Limpiar el HTML
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        // si no hay citas
        if (this.citas.length === 0) {
            contenedorCitas.innerHTML =
                '  <p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
            return;
        }

        // Generando las citas
        this.citas.forEach((cita) => {
            const divCita = document.createElement("div");
            divCita.classList.add(
                "mx-5",
                "my-10",
                "bg-white",
                "shadow-md",
                "px-5",
                "py-10",
                "rounded-xl",
                "p-3"
            );

            const id = document.createElement("p");
            id.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            id.innerHTML = `<span class="font-bold uppercase">Id: </span> ${cita.id}`;

            const paciente = document.createElement("p");
            paciente.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement("p");
            propietario.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const telefono = document.createElement("p");
            telefono.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            telefono.innerHTML = `<span class="font-bold uppercase">Telefono: </span> ${cita.telefono}`;

            const email = document.createElement("p");
            email.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fechaIngreso = document.createElement("p");
            fechaIngreso.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            fechaIngreso.innerHTML = `<span class="font-bold uppercase">Fecha Ingreso: </span> ${cita.fechaIngreso}`;

            const hora = document.createElement("p");
            hora.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            hora.innerHTML = `<span class="font-bold uppercase">Hora Ingreso: </span> ${cita.hora}`;

            const fecha = document.createElement("p");
            fecha.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha Alta: </span> ${cita.fecha}`;

            const sintomas = document.createElement("p");
            sintomas.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            // Botones de ELIMINAR y EDITAR

            const btnEditar = document.createElement("button");
            btnEditar.classList.add(
                "py-2",
                "px-10",
                "bg-indigo-600",
                "hover:bg-indigo-700",
                "text-white",
                "font-bold",
                "uppercase",
                "rounded-lg",
                "flex",
                "items-center",
                "gap-2",
                "btn-editar"
            );
            btnEditar.innerHTML =
                'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

            // Toma una copia completa del objeto, ya que el forEach solo hace el recorrido del objeto
            // Puede se con el structuredClone o un destrocturing
            const clone = structuredClone(cita);
            //const clone = { ...cita };

            // Event Handler
            btnEditar.onclick = () => {
                cargarEdicion(clone);
            };

            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add(
                "py-2",
                "px-10",
                "bg-red-600",
                "hover:bg-red-700",
                "text-white",
                "font-bold",
                "uppercase",
                "rounded-lg",
                "flex",
                "items-center",
                "gap-2",
                "btn-eliminar"
            );
            btnEliminar.innerHTML =
                'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

            btnEliminar.onclick = () => {
                this.eliminar(cita.id);
            };

            const contenedorBotones = document.createElement("DIV");
            contenedorBotones.classList.add("flex", "justify-between", "mt-10");

            contenedorBotones.appendChild(btnEditar); // Se agrega primero para tenerlo del lado izq
            contenedorBotones.appendChild(btnEliminar);

            // Agregar al HTML
            divCita.appendChild(id);
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(telefono);
            divCita.appendChild(email);
            divCita.appendChild(fechaIngreso);
            divCita.appendChild(hora);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);

            contenedorCitas.appendChild(divCita);
        });
    }
}
