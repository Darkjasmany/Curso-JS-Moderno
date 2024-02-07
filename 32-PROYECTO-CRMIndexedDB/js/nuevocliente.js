(function () {
    let DB;

    const formulario = document.querySelector("#formulario");

    document.addEventListener("DOMContentLoaded", () => {
        conectarDB();

        formulario.addEventListener("submit", validarCliente);
    });

    function validarCliente(e) {
        e.preventDefault();

        // Leer todos los inputs
        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const telefono = document.querySelector("#telefono").value;
        const empresa = document.querySelector("#empresa").value;

        if (
            nombre === "" ||
            email === "" ||
            telefono === "" ||
            empresa === ""
        ) {
            imprimirAlerta("Todos los campos son obligatios", "error");
            return;
        }

        // añadir a la BD...
        // crear un nuevo objeto con toda la info

        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            // id = Date.now()
        };

        // Generar un ID único
        cliente.id = Date.now();

        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente) {
        // NUEVO:
        const transaction = DB.transaction(["crm"], "readwrite"); // Seleccionamos la bd y damos permisos de lectura y escritura
        const objectStore = transaction.objectStore("crm"); // definimos el objeto para que las transacciones se hagan en la bd crm
        // console.log(objectStore);
        objectStore.add(cliente); // agregamos el cliente

        transaction.onerror = function () {
            // console.log("Hubo un error!");
            imprimirAlerta("Hubo un Error", "error");
        };

        transaction.oncomplete = function () {
            console.log("Cliente Agregado");

            // Mostrar mensaje de que todo esta bien...
            imprimirAlerta("Se agregó correctamente");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 3000);
        };
    }

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
})();
