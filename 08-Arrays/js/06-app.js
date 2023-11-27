// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 500,
};

const producto2 = {
    nombre: "Celular",
    precio: 500,
};
const producto3 = {
    nombre: "Teclado",
    precio: 50,
};

// Forma declarativa
// Para añadir producto al arreglo simplemente agregamos...
// ... creamos una copia del arreglo carrito y agregamos el primer producto
let resultado = [...carrito, producto];
resultado = [...resultado, producto2];

// Para añadir al inicio...
resultado = [producto3, ...resultado];

//Esta forma se conoce más como Declarativa mientras que la del video anterior es más imperativa, ambas son muy utilizadas en programación JavaScript

console.log(resultado);
console.table(resultado);
console.table(carrito);
