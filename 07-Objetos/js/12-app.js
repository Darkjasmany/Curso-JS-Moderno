// Object Literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
};

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponibles = true;
}

const producto2 = new Producto('Monitor Curved Gamming 30"', 400);

console.log(producto2);
