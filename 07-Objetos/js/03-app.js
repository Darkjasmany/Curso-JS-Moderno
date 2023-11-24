const producto2 = {
    nombre: 'Monitor 30"',
    precio: 500,
    disponible: true,
};

// Agregar nuevas propiedades al objeto
producto2.imagen = "imagen.jpg";

// Eliminar una propiedades del objeto
delete producto2.disponible;

console.log(producto2);
