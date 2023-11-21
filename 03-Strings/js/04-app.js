// Metodos que permitan elimnar espacios en blanco al inicio y final
const producto = '  Monitor Xiaomi Curved 30" ';
console.log(producto);
console.log(producto.length);

//Eliminar del inicio
console.log(producto.trimStart());
//Eliminar del final
console.log(producto.trimEnd());

//Eliminar en ambas direcciones
//Unir los dos metodos
console.log(producto.trimStart().trimEnd());

//Forma antigua
console.log(producto.trim());
