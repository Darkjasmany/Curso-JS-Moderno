const producto = {
    nombre: 'Monitor 30"',
    precio: 500,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m",
        fabricacion: {
            pais: "China",
        },
    },
};

// console.log(producto);
// console.log(producto.informacion);
// console.log(producto.informacion.peso);
// console.log(producto.informacion.medida);
console.log(producto.informacion.fabricacion.pais);
