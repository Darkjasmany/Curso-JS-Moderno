const producto = {
    nombre: 'Monitor 30"',
    precio: 500,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m",
        },
        fabricacion: {
            pais: "China",
        },
    },
};

// const { nombre } = producto;
// console.log(nombre);

const {
    nombre,
    informacion,
    // informacion: { fabricacion },
} = producto;

console.log(nombre);
console.log(informacion);
// console.log(fabricacion);

//Para acceder al pais

const {
    informacion: {
        fabricacion,
        fabricacion: { pais },
    },
} = producto;

console.log(pais);
console.log(fabricacion);
