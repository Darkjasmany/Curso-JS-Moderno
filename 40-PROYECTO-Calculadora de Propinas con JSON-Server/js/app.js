let cliente = {
    mesa: "",
    hora: "",
    pedido: [],
};

const categorias = {
    1: "Comidas",
    2: "bebidas",
    3: "Postres",
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

    // Obtener platillos de la API de JSON-SERVER
    obtnerPlatillos();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll(".d-none"); // devuelve como un arreglo por eso hacemos el recorrido con el foreach
    seccionesOcultas.forEach((seccion) => seccion.classList.remove("d-none"));
}

function obtnerPlatillos() {
    const url = "http://localhost:4000/platillos";

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => mostrarPlatillos(resultado))
        .catch((error) => console.log(error));
}

function mostrarPlatillos(platillos) {
    // console.log(platillos);

    const contenido = document.querySelector("#platillos .contenido");

    // Foreach permite acceder a cada uno de los resultados de nuestra API
    platillos.forEach((platillo) => {
        // console.log(platillo);
        const { id, nombre, precio, categoria } = platillo;
        const row = document.createElement("DIV");
        row.classList.add("row", "py-3", "border-top");

        const nombrePlatillo = document.createElement("DIV");
        nombrePlatillo.classList.add("col-md-4");
        nombrePlatillo.textContent = nombre;

        const precioPlatillo = document.createElement("DIV");
        precioPlatillo.classList.add("col-md-3", "fw-bold");
        precioPlatillo.textContent = `$ ${precio}`;

        const categoriaPlatillo = document.createElement("DIV");
        categoriaPlatillo.classList.add("col-md-3");
        categoriaPlatillo.textContent = categorias[categoria] || " "; // Con el arreglo de Categorias lo que va hacer es deacuerdo al ID lo va a filtrar y muestra caso contrario muestra vacio

        const inputCantidad = document.createElement("INPUT");
        inputCantidad.type = "number";
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${id}`;
        inputCantidad.classList.add("form-control", "text-end");

        // Funcion que detecta la cantidad y el platillo que se esta agregando una funcion lineal para que al momento que damos clic para cambiar las cantidades hace cambio de cantidad, de esta forma esta funcion no se esta llamando hasta que se cumpla el evento, asi mismo quiero leer el numero que se esta colocando
        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value); // Todo lo que se lee es un string asi sea un numero entero por eso la conversion
            agregarPlatillo({ ...platillo, cantidad }); // pasamos todo el objeto de platillo y lo convertimos en un objeto usamos un spreadoperator y pasamos todo el objeto para que todo quede en un solo objeto
        };

        const agregarInputCantidad = document.createElement("DIV");
        agregarInputCantidad.classList.add("col-md-2");
        agregarInputCantidad.appendChild(inputCantidad);

        row.appendChild(nombrePlatillo);
        row.appendChild(precioPlatillo);
        row.appendChild(categoriaPlatillo);
        row.appendChild(agregarInputCantidad);

        contenido.appendChild(row);
        // console.log(nombrePlatillo);
    });
}

function agregarPlatillo(producto) {
    // console.log(producto);
    const { cantidad, categoria, id, nombre, precio } = producto;

    // Extraer el producto actual
    let { pedido } = cliente;

    // Revisar que la cantidad es mayor a 0
    if (cantidad > 0) {
        // console.log(pedido.some((articulo) => articulo.id === producto.id));
        // vamos a verificar si 1 elemento ya existe en un arreglo
        // Comprueba si el elemento ya existe en un array
        if (pedido.some((articulo) => articulo.id === producto.id)) {
            // El articulo ya existe, actualizar la cantidad
            const pedidoActualizado = pedido.map((articulo) => {
                if (articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            // Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];
        } else {
            // el articulo no existe lo agregamos al array de pedido
            cliente.pedido = [...pedido, producto]; // agrego una copia del pedido previo que ya habia en el arreglo y le paso el producto de esa forma se va agregando al final del arreglo
        }
    } else {
        // Eliminar elementos cuando la cantidad es 0
        const resultado = pedido.filter(
            (articulo) => articulo.id !== producto.id
        );
        cliente.pedido = [...resultado];
    }

    // console.log(cliente.pedido);

    // Limpiar el código HTML previo
    limpiarHTML();

    // Comprobar si un arreglo esta vacio, si hay algo en el arreglo
    if (cliente.pedido.length) {
        // Mostrar el Resument
        actualizarResumen();
    } else {
        mensajePedidoVacio();
    }
}

function actualizarResumen() {
    const contenido = document.querySelector("#resumen .contenido");
    const resumen = document.createElement("DIV");
    resumen.classList.add("col-md-6", "card", "py-2", "px-3", "shadow");

    const mesa = document.createElement("P");
    mesa.textContent = "Mesa: ";
    mesa.classList.add("fw-bold");

    const mesaSpan = document.createElement("SPAN");
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add("fw-normal");

    const hora = document.createElement("P");
    hora.textContent = "Hora: ";
    hora.classList.add("fw-bold");

    const horaSpan = document.createElement("SPAN");
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add("fw-normal");

    // Agregar a los elementos padres
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    // Titulo de la sección
    const heading = document.createElement("H3");
    heading.classList.add("my-4", "text-center");
    heading.textContent = "Platillos Consumidos";

    // Iterar sobre el array de pedidos
    const grupo = document.createElement("UL");
    grupo.classList.add("list-group");

    const { pedido } = cliente;
    pedido.forEach((articulo) => {
        // console.log(articulo);
        const { nombre, cantidad, precio, id } = articulo;

        const lista = document.createElement("LI");
        lista.classList.add("list-group-item");

        const nombreEl = document.createElement("H4");
        nombreEl.classList.add("my-4");
        nombreEl.textContent = nombre;

        // Cantidad del articulo
        const cantidadEl = document.createElement("P");
        cantidadEl.classList.add("fw-bold");
        cantidadEl.textContent = "Cantidad: ";

        const cantidadValor = document.createElement("SPAN");
        cantidadValor.classList.add("fw-normal");
        cantidadValor.textContent = cantidad;

        // Precio del articulo
        const precioEl = document.createElement("P");
        precioEl.classList.add("fw-bold");
        precioEl.textContent = "Precio: ";

        const precioValor = document.createElement("SPAN");
        precioValor.classList.add("fw-normal");
        precioValor.textContent = `$ ${precio} `;

        // Total del articulo
        const subtotalEl = document.createElement("P");
        subtotalEl.classList.add("fw-bold");
        subtotalEl.textContent = "SubTotal: ";

        const subtotalValor = document.createElement("SPAN");
        subtotalValor.classList.add("fw-normal");
        subtotalValor.textContent = calcularSubtotal(precio, cantidad);

        // Agregar valores a sus contenedores
        cantidadEl.appendChild(cantidadValor);
        precioEl.appendChild(precioValor);
        subtotalEl.appendChild(subtotalValor);

        // Boton de eliminar
        const btnEliminar = document.createElement("BUTTON");
        btnEliminar.classList.add("btn-danger", "btn");
        btnEliminar.textContent = "Eliminar del Pedido";
        // Funcion para eliminar del pedido
        btnEliminar.onclick = function () {
            eliminarProducto(id);
        };

        // Agregar Elementos al LI
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotalEl);
        lista.appendChild(btnEliminar);

        // Agregar lista al grupo princial
        grupo.appendChild(lista);
    });

    // Agregar al contenido
    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    // Mostrar formulario de propinas;
    formularioPropinas();
}

function calcularSubtotal(precio, cantidad) {
    return `$ ${precio * cantidad}`;
}

function eliminarProducto(id) {
    const { pedido } = cliente;
    const resultado = pedido.filter((articulo) => articulo.id !== id);
    cliente.pedido = [...resultado];

    // console.log(cliente.pedido);

    // Limpiar el código HTML previo
    limpiarHTML();

    // Verificamos si el arreglo del cliente no esta vacio
    if (cliente.pedido.length) {
        // Mostrar el Resument
        actualizarResumen();
    } else {
        mensajePedidoVacio();
    }

    // El producto se elimino por lo tanto regresamos la cantidad a 0 en el formulario

    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;
    // console.log(productoEliminado);
}

function mensajePedidoVacio() {
    const contenido = document.querySelector("#resumen .contenido");
    const texto = document.createElement("P");
    texto.classList.add("text-center");
    texto.textContent = "Añade los elementos del pedido";

    contenido.appendChild(texto);
}

function formularioPropinas() {
    // console.log("Mostrando Formulario");
    const contenido = document.querySelector("#resumen .contenido");

    const formulario = document.createElement("DIV");
    formulario.classList.add("col-md-6", "formulario");

    const divFormulario = document.createElement("DIV");
    divFormulario.classList.add("card", "py-2", "px-3", "shadow");

    const heading = document.createElement("H3");
    heading.classList.add("my-4", "text-center");
    heading.textContent = "Propina";

    // Radio Button 10%
    const radio10 = document.createElement("INPUT");
    radio10.type = "radio";
    radio10.name = "propina";
    radio10.value = "10";
    radio10.classList.add("form-check-input");
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement("LABEL");
    radio10Label.textContent = "10%";
    radio10Label.classList.add("form.check-label");

    const radio10Div = document.createElement("DIV");
    radio10Div.classList.add("form-check");

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);

    // Radio Button 25%
    const radio25 = document.createElement("INPUT");
    radio25.type = "radio";
    radio25.name = "propina";
    radio25.value = "25";
    radio25.classList.add("form-check-input");
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement("LABEL");
    radio25Label.textContent = "25%";
    radio25Label.classList.add("form.check-label");

    const radio25Div = document.createElement("DIV");
    radio25Div.classList.add("form-check");

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);

    // Radio Button 50%
    const radio50 = document.createElement("INPUT");
    radio50.type = "radio";
    radio50.name = "propina";
    radio50.value = "50";
    radio50.classList.add("form-check-input");
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement("LABEL");
    radio50Label.textContent = "50%";
    radio50Label.classList.add("form.check-label");

    const radio50Div = document.createElement("DIV");
    radio50Div.classList.add("form-check");

    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);

    // Agregar al div prinicipal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);

    // Agregar al formulario
    formulario.appendChild(divFormulario);

    contenido.appendChild(formulario);
}

function calcularPropina() {
    // console.log("calculando");
    const { pedido } = cliente;
    let subtotal = 0;

    // Calcular el subtotal a pagar
    pedido.forEach((articulo) => {
        subtotal += articulo.cantidad * articulo.precio;
    });
    // console.log(subTotal);

    // Seleccionar el radiobutton con la propina del cliente
    const propinaSeleccionada = document.querySelector(
        '[name= "propina"]:checked'
    ).value;

    // Calcular la propina
    const propina = (subtotal * parseInt(propinaSeleccionada)) / 100;

    // Calcular el total a pagar
    const total = subtotal + propina;

    // console.log(subtotal, total, propina);
    mostrarTotalHtml(subtotal, total, propina);
}

function mostrarTotalHtml(subtotal, total, propina) {
    // DIV que contendra todo el contenido
    const divTotales = document.createElement("DIV");
    divTotales.classList.add("total-pagar", "my-5");

    // Subtotal
    const subtotalParrafo = document.createElement("P");
    subtotalParrafo.classList.add("fs-4", "fw-bold", "mt-3");
    subtotalParrafo.textContent = "Subtotal Consumo: ";

    const subtotalSpan = document.createElement("SPAN");
    subtotalSpan.classList.add("fw-normal");
    subtotalSpan.textContent = `$${subtotal}`;

    subtotalParrafo.appendChild(subtotalSpan);

    // Propinas
    const propinasParrafo = document.createElement("P");
    propinasParrafo.classList.add("fs-4", "fw-bold", "mt-2");
    propinasParrafo.textContent = "Propina: ";

    const propinaSpan = document.createElement("SPAN");
    propinaSpan.classList.add("fw-normal");
    propinaSpan.textContent = `$${propina}`;

    propinasParrafo.appendChild(propinaSpan);

    // Total
    const totalParrafo = document.createElement("P");
    totalParrafo.classList.add("fs-4", "fw-bold", "mt-2");
    totalParrafo.textContent = "Total a Pagar: ";

    const totalSpan = document.createElement("SPAN");
    totalSpan.classList.add("fw-normal");
    totalSpan.textContent = `$${total}`;

    totalParrafo.appendChild(totalSpan);

    // Eliminar el ultimo resultado
    const totalPagarDiv = document.querySelector(".total-pagar");
    if (totalPagarDiv) {
        totalPagarDiv.remove();
    }

    // Añadiendo los Parrafos al divTotales
    divTotales.appendChild(subtotalParrafo);
    divTotales.appendChild(propinasParrafo);
    divTotales.appendChild(totalParrafo);

    const formulario = document.querySelector(".formulario > div"); // en la clase formulario seleccione el primer div
    formulario.appendChild(divTotales);
}

function limpiarHTML() {
    const contenido = document.querySelector("#resumen .contenido");

    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
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
