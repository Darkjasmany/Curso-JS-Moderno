(function () {
    let DB;

    const listadoClientes = document.querySelector("#listado-clientes");

    document.addEventListener("DOMContentLoaded", () => {
        crearDB();

        // Esta funcion solo se ejecuta si ya exite la base de datos
        if (window.indexedDB.open("crm", 1)) {
            obtenerClientes();
        }

        listadoClientes.addEventListener("click", eliminarRegistro);
    });

    function eliminarRegistro(e) {
        // va a mostar a lo que le hemos dado click
        if (e.target.classList.contains("eliminar")) {
            const idEliminar = Number(e.target.dataset.cliente);
            // console.log(idEliminar);
            const confirmar = confirm("Deseas eleiminar este cliente"); // confirm muestra una ventana emergente de confirmar
            // console.log(confirmar); // retorna true or false
            if (confirmar) {
                const transaction = DB.transaction(["crm"], "readwrite");
                const objectStore = transaction.objectStore("crm");

                objectStore.delete(idEliminar);

                transaction.oncomplete = function () {
                    e.target.parentElement.parentElement.remove();
                };

                transaction.onerror = function () {
                    imprimirAlerta("Hubo un error", "error");
                };
            }
        }
    }

    // Código de IndexedDB
    function crearDB() {
        // crear base de datos con la versión 1
        const crearDB = window.indexedDB.open("crm", 1);

        // si hay un error, lanzarlo
        crearDB.onerror = function () {
            console.log("Hubo un error");
        };

        // si todo esta bien, asignar a database el resultado
        crearDB.onsuccess = function () {
            // guardamos el resultado
            DB = crearDB.result;
        };

        // este método solo corre una vez
        crearDB.onupgradeneeded = function (e) {
            // el evento que se va a correr tomamos la base de datos
            const db = e.target.result;

            // definir el objectstore, primer parametro el nombre de la BD, segundo las opciones
            // keypath es de donde se van a obtener los indices
            const objectStore = db.createObjectStore("crm", {
                keyPath: "id",
                autoIncrement: true,
            });

            //createindex, nombre y keypath, 3ro los parametros
            objectStore.createIndex("nombre", "nombre", { unique: false });
            objectStore.createIndex("email", "email", { unique: true });
            objectStore.createIndex("telefono", "telefono", { unique: false });
            objectStore.createIndex("empresa", "empresa", { unique: false });
            objectStore.createIndex("id", "id", { unique: true });

            console.log("Database creada y lista");
        };
    }

    function obtenerClientes() {
        // Abrir la conexion
        const abrirConexion = window.indexedDB.open("crm", 1);

        // Revisamos si hay un error o no
        abrirConexion.onerror = function () {
            console.error("Error");
        };

        abrirConexion.onsuccess = function () {
            // console.log("Todo OK");
            DB = abrirConexion.result;

            // Acceder al objectStore 1 acceder a la bd y acceder al objectStore
            const objectStore = DB.transaction("crm").objectStore("crm");

            objectStore.openCursor().onsuccess = function (e) {
                const cursor = e.target.result; // el resultado que se haya ejecutado por este evento,

                //el cursor va a recorrer desde la posicion 0 a cada elemento, y  parar pasar el siguiente registro lo hacemos con cursor.continue()

                if (cursor) {
                    // console.log(cursor.value);
                    const { nombre, email, telefono, empresa, id } =
                        cursor.value;

                    listadoClientes.innerHTML += `

                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                        </tr>
                    `;

                    cursor.continue();
                } else {
                    console.log("No hay registros");
                }
            };
        };
    }
})();
