// ForEach y Map con arrow functions...

const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Televisión 50 Pulgadas", precio: 700 },
    { nombre: "Tablet ", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
];

// Sintaxis con un map
const nuevoArray = carrito.map(function (producto) {
    return `Articulo: ${producto.nombre} Precio: $ producto.precio} `;
});

// Sintaxis con un map con arrow functions
const nuevoArray1 = carrito.map(
    (producto) => `Articulo: ${producto.nombre} Precio: $ producto.precio} `
);

// Sintaxis con un foreach
const nuevoArray2 = carrito.forEach(function (producto) {
    return `Articulo: ${producto.nombre} Precio: $ producto.precio} `;
});

// Sintaxis con un foreach con arrow functions
const nuevoArray3 = carrito.forEach((producto) =>
    console.log(`Articulo: ${producto.nombre} Precio: $ producto.precio} `)
);

console.log(nuevoArray);
console.log(nuevoArray2);

// Los arrow functions si no se coloca el return y queda en una sola linea dan por implicito el return.. en el map
