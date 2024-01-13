// El problema que solucionan los prototypes...

// Object Constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jasmany = new Cliente("Jasmany", 1200);

console.log(jasmany);

// Supongamos que queremos una función que muestre el nombre y saldo...
function formatearCliente(cliente) {
    const { nombre, saldo } = cliente;
    return `El cliente ${nombre}, tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(jasmany));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const tomatino = new Empresa("Tomatio", 1000000, "Agricola");

function formatearEmpresa(empresa) {
    const { nombre, saldo, categoria } = empresa;
    return `La empresa ${nombre}, tiene un saldo de ${saldo} y pertene a la categoria ${categoria}`;
}

console.log(formatearEmpresa(tomatino));

// Debido a que tengo una propiedad nueva, es dificil reutilizar esa función, lo cual nos llevaria digamos a muchas funciones que no sabriamos cuales utilizar para los diferentes objetos, esa es una ventaja que nos dan los prototypes ya que podemos crear funciones que se podrían atar o utilizar unicamente con determinados objetos...
