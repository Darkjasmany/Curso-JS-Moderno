// Veamos un par de funciones para convertir a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);

// Convertir de Strings a Números flotantes o Enteros

console.log(Number.parseInt(numero1)); // Convertir de String a Número Entero
console.log(Number.parseFloat(numero2)); // Convertir a número con decimales
console.log(Number.parseInt(numero3)); // resultadi NaN no es un numero

// Revisar si un número es entero
console.log(Number.isInteger(numero4)); // Revisar si un número es entero o no TRUE
console.log(Number.isInteger(numero3)); // FALSE

// Convertir String a numero
console.log(numero4.toString());
