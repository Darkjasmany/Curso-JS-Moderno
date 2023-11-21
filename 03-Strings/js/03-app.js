const producto = 'Monitor Xiaomi Curved 30"';
const precio = "30 USD";

console.log(producto.concat(precio));
console.log(producto.concat("En descuentos"));

//Otras formas de concatenar
console.log(producto + "con una precio de: " + precio);
console.log(producto, "con una precio de: ", precio);

// Template Strings
console.log(`El producto ${producto} tiene un precio de ${precio}`);
