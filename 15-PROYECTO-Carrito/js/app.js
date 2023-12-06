// VARIABLES
const carrito = document.querySelector("#carrito"); // Seleccionamos el carrito que contiene todos los archivos
const contenedorCarrito = document.querySelector("#lista-carrito tbody"); // Donde se van a ir agregando los cursos del carrito
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

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
        console.log(e.target.parentElement.parentElement); //Subo dos veces de elemento
        // console.log("Dio clic en agregar carrito de los cursos");
    }

    // console.log(e.target.classList); // Para ver las clases de los que le estamos dando click en el DOM
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso() {}
