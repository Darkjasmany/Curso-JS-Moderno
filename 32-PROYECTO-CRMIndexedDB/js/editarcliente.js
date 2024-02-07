(function () {
    let DB;
    let idCliente;

    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const telefonoInput = document.querySelector("#telefono");
    const empresaInput = document.querySelector("#empresa");

    const formulario = document.querySelector("#formulario");

    document.addEventListener("DOMContentLoaded", () => {
        // Conectar a la BD
        conectarDB();

        // Actualiza el registro
        formulario.addEventListener("submit", actualizarCliente);

        // Verificar el ID de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get("id");
        // console.log(idCliente);
        if (idCliente) {
            setTimeout(() => {
                // Se usa un setTimeout xq aun no usamos las function asyncronas y esto se debe a que la bd demora un poco en acceder y verificar y cuando obtenemos el id de la url aun no termina la conexion y dara un error
                obtenerCliente(idCliente);
            }, 100);
        }
    });

    function obtenerCliente(id) {
        // console.log(id);
        // Obtener ese cliente, nombre de BD y el permiso
        const transaction = DB.transaction(["crm"], "readwrite");
        const objectStore = transaction.objectStore("crm"); // Aqui vamos acceder al CRM

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function (e) {
            const cursor = e.target.result;

            if (cursor) {
                // console.log(cursor.value); // En index db no hay n where por lo que para acceder al registro que queremos tenemos que hacer

                if (cursor.value.id === Number(id)) {
                    console.log(cursor.value); // aqui nos trae el registro especifico

                    llenarFormulario(cursor.value);
                }

                cursor.continue();
            }
        };
    }

    function llenarFormulario(datosCliente) {
        const { nombre, email, telefono, empresa, id } = datosCliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

    function actualizarCliente(e) {
        e.preventDefault();

        if (
            nombreInput.value === "" ||
            emailInput.value === "" ||
            telefonoInput.value === "" ||
            empresaInput.value === ""
        ) {
            console.error("Hubo un error");
            imprimirAlerta("Todos los campos son obligatirios ", "error");
            return;
        }

        // Actualizar cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente),
        };

        // console.log(clienteActualizado);

        const transaction = DB.transaction(["crm"], "readwrite");
        const objectStore = transaction.objectStore("crm");

        objectStore.put(clienteActualizado);

        transaction.oncomplete = function () {
            console.log("Actualizado correctamente");
        };

        transaction.onerror = function () {
            imprimirAlerta("Hubo un error", "error");
        };

        function conectarDB() {
            // ABRIR CONEXIÓN EN LA BD:

            let abrirConexion = window.indexedDB.open("crm", 1);

            // si hay un error, lanzarlo
            abrirConexion.onerror = function () {
                console.log("Hubo un error");
            };

            // si todo esta bien, asignar a database el resultado
            abrirConexion.onsuccess = function () {
                // guardamos el resultado
                DB = abrirConexion.result;
            };
        }
    }
})();
