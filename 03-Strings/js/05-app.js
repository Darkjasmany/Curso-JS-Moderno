const producto = 'Monitor Xiaomi Curved 30"';

// .replace Remplazar un texto de una cadena
console.log(producto);
console.log(producto.replace('"', " Pulgadas"));
console.log(producto.replace("Curved", "Curvo"));

// .slice Cortar una parte de una cadena de texto, se pasa posicion de inicio y final
console.log(producto.slice(0, 10)); //Indica de que parte no se corta y de ahi si corta todo
console.log(producto.slice(8));
console.log(producto.slice(2, 1)); //Si le pasas un numero mayor que el primero no hace nada

// Alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1)); //Si le pasas un numero mayor que el primero lo reordena

// Cortar la primer letra
const usuario = "Jasmany";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));
