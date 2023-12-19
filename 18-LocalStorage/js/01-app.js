// Agregar elementos en localStorage
localStorage.setItem("nombre", "Jasmany");

// Agregar elementos en sessionStorage
sessionStorage.setItem("nombre", "Nicólas");

// localStorage solo almacena String
// Forma de convertir un Object a un String
const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 500.0,
};

const productoString = JSON.stringify(producto);
console.log(productoString);
console.log(typeof productoString);

// Almacenamos el Object convertido en String en el localStorage
localStorage.setItem("producto", productoString);

//Forma de convertir un Array
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const mesesString = JSON.stringify(meses);
console.log(mesesString);
console.log(typeof mesesString);

// Almacenamos el Array convertido en String en el localStorage
localStorage.setItem("meses", mesesString);

// Forma abreviada sin crear una variables
localStorage.setItem("meses1", JSON.stringify(meses));
