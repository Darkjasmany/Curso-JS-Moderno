// En este capitulo estaremos viendo que son los prototypes y como utilizarlos

// Los prototypes están muy relacionados con los objetos... de hecho el prototype esta disponible en todos los objetos

// Previamente habiamos visto 2 formas de crear objetos...

// Object literal, que es algo asi:
// Esta forma aunque es la más común, también es menos dinamica..
const cliente = {
    nombre: "Juan",
    saldo: 500,
};

// Si necesitas añadir o crear un objeto reutilizable tienes que utilizar un constructor de función

// En JavaScript hoy en día tenemos classes, pero previamente la programación porientada aobjetos era de la siguiente forma:

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jasmany = new Cliente("Jasmany", 1200);
const nicolás = new Cliente("Jasmany Nicolás", 1200);

// Puedes ver que si expandimos jasmany y nicolás en la consola tenemos algo llamado el Prototype...
console.log(jasmany);
console.log(nicolás);
