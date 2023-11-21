const producto = 'Monitor Xiaomi Curved 30 "';

console.log(producto);

// Conocer la cantidad de letras de la cadena de texto
console.log(producto.length + " " + "letras tiene la cadena de caractere");

// Buscar coincidencias en una cadena de texto, indica si este tiene monitor en la cadena
console.log(producto.indexOf("Monitor"));
console.log(producto.indexOf("30"));
console.log(producto.indexOf("Tablet")); // resultado -1 no lo encontro

// Includes mas util que indexOf, includes devuelve true or false revisa por mayusculas y minusculas
console.log(producto.includes("Monitor"));
console.log(producto.includes("30"));
console.log(producto.includes("Tablet")); // resultado false no lo encontro
