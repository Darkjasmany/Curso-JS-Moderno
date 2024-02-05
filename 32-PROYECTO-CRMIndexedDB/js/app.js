// Declaramos un eefi, es para que nuestras variables que declaremos de forma global se queden en este documento
(function () {
    let DB;

    document.addEventListener("DOMContentLoaded", () => {
        crearDB();
    });

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
})();
