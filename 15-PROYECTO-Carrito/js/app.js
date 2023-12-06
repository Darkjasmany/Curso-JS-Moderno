// VARIABLES
const carrito = document.querySelector("#carrito"); // Seleccionamos el carrito que contiene todos los archivos
const contenedorCarrito = document.querySelector("#lista-carrito tbody"); // Donde se van a ir agregando los cursos del carrito
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = []; // Inicia vacio este arreglo, es let porque vamos agregar y quitar elementos

// Van a existir muchos Eventos por eso se recomienda crear una función para agruparlos

cargarEventListener();

function cargarEventListener() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener("click", agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener("click", eliminarCurso);

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener("click", () => {
        // console.log("Vaciando Carrito");

        articulosCarrito = []; //Reseteamos el carrito
        limpiarHTML(); // Eliminamos todo el HTML
    });
}

// FUNCIONES
function agregarCurso(e) {
    e.preventDefault(); // con esto evitamos que se ejecute la accion por defecto de los enlaces que es ir al href, pero como en este proyecto no tenemos enlace, nos lleva hacia arriba
    // validamos que esta funcion se ejecute solo cuando se de click a un boton que tenga la clase agregar-carrito
    if (e.target.classList.contains("agregar-carrito")) {
        //Para saber que curso estamos agregando
        const cursoSeleccionado =
            e.target.parentElement.parentElement.parentElement; // Accedemos a todo ell DIV que tiene el contenido del curso
        leerDatosCurso(cursoSeleccionado);
        // console.log(e.target.parentElement.parentElement); //Subo dos veces de elemento
    }

    // console.log(e.target.classList); // Para ver las clases de los que le estamos dando click en el DOM
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    // console.log(e.target.classList); // Para ver las clases de los
    if (e.target.classList.contains("borrar-curso")) {
        // console.log(e.target.getAttribute("data-id")); //para ver el id
        const cursoId = e.target.getAttribute("data-id");

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(
            (curso) => curso.id !== cursoId
        );

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML

        // console.log(articulosCarrito);
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    // console.log(curso); // recordar el curso tiene el HTML

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector("img").src, // Extraer la ruta de la imagen
        titulo: curso.querySelector("h4").textContent, // Extraer el texto del curso
        precio: curso.querySelector(".precio span").textContent, // Extrayendo el precio del HTML
        id: curso.querySelector("a").getAttribute("data-id"), // Selecciono el id del curso seleccionado
        cantidad: 1,
    };
    // console.log(infoCurso);

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
    if (existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map((curso) => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna el objeto queno son duplicados
            }
        }); // crea un nuevo arreglo e itera sobre todos los elementos del carrito
        articulosCarrito = [...cursos];
        // console.log(articulosCarrito);
    } else {
        // Agregamos el curso al carrito tomando una copia para no perder la informacion del carrito, va a ir creciendo de forma dinamica
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    // console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {
    // Limpiar el HTML
    limpiarHTML();
    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach((curso) => {
        // console.log(curso);
        // Una vez que funciona el codigo hay que mejoraro, por lo que usaremos destrocturing
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>
            <img src="${imagen}" width="100">
          </td>
          <td>${titulo}</td>
          <td>${precio}</td>
          <td>${cantidad}</td>
          <td>
            <a href="#" class="borrar-curso" data-id=${id}> X </a>
          </td>
        `;

        // Antes del destrocturing
        // <img src="${curso.imagen}" width="100">
        // </td>
        // <td>${curso.titulo}</td>

        // Agrega el HTML del carrito en el Tbody
        contenedorCarrito.appendChild(row);
    });
}

// Funcion para limpiar el HTML, elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = "";

    // Optimizar performan
    // Si ese contenedor carrito tiene un elemento adentro este codigo se siguie ejecutando
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
