const producto = {
    nombre: 'Monitor 30"',
    precio: 500,
    disponible: true,
};

// const nombreProducto = producto.nombre;
// console.log(nombreProducto);

// Destructuring
// Forma Actual Object Destructuring -> Extraer del objeto y crear la variable en un mismo paso, dentro de las llaves tu colocas las llaves que vas a exter
const { nombre } = producto;

console.log(nombre);

// Destructuring con arreglos
// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:

const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;
// const [primero] = numeros;

// console.log(numeros);
console.log(primero);
console.log(segundo);
console.log(tercero);

// Solo quiero el tercer valor
const [, , tercer] = numeros;
console.log(tercer);

// Solo quiero el primero y el tercer valor
const [primerin, , tercerin] = numeros;
console.log(primerin);
console.log(tercerin);

// Si quieres saltarte un valor, pon una coma....

// ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, mantener el arreglo original..
//esten en su propio arreglo los 4 ultimos, osea todos los valores que no hayan sido parte del Array destructuring
const [primera, segunda, ...tercera] = numeros;
console.log(tercera); // aqui a  tener su propio arrego con 30 40 , 50
