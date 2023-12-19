// Acceder a los datos almacenados en localStorage
// getItem seguido de la Clave
const nombre = localStorage.getItem("nombre");
console.log(nombre);

const productoJSON = localStorage.getItem("producto");
console.log(JSON.parse(productoJSON)); // Convierte un string en un array, siempre y cuando cumpla con el formato aceptado

// o tambien
const meses = JSON.parse(localStorage.getItem("meses"));
console.log(meses);
