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

    //Agrega elemetos al arreglo de carrito
    //voy a tomar una copia de lo que hay en el carrito para no perder la informacion del carrito, va a ir creciendo de forma dinamica
    articulosCarrito = [...articulosCarrito, infoCurso];
    // console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {
    // Limpiar el HTML
    limpiarHTML();
    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach((curso) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>
          ${curso.imagen}
          </td>
          <td>
          ${curso.titulo}
          </td>
          <td>
          ${curso.precio}
          </td>
          <td>
          ${curso.cantidad}
          </td>
        `;

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
