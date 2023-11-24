const producto = {
    nombre: 'Monitor 30"',
    precio: 500,
    disponible: true,
};

// console.log(producto.nombre);

// Extraer el valor de un objeto y asignarlo a una variable

// Forma Antigua
const nombreProducto = producto.nombre;
console.log(nombreProducto);

// Forma Actual Object Destructuring -> Extraer del objeto y crear la variable en un mismo paso, dentro de las llaves tu colocas las llaves que vas a exter
// const { nombre } = producto;
// const { precio } = producto;

// console.log(nombre);
// console.log(precio);

// Simplificamos esto
const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
