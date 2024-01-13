function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Obtener Tipo de Cliente
Cliente.prototype.tipoCliente = function () {
    // Con prototypes tienes que utilizar function, function buscara en el mismo objeto mientras que un arrow function irá hacia la ventana global marcandote un undefined

    let tipo;

    if (this.saldo > 10000) {
        tipo = "Gold";
    } else if (this.saldo > 5000) {
        tipo = "Platinum";
    } else {
        tipo = "Normal";
    }

    return tipo;
};

// Otro Prototipo para el nombre completo
Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo ${
        this.saldo
    }, Tipo Cliente:  ${this.tipoCliente()} `;
};

Cliente.prototype.retiraSaldo = function (retiro) {
    this.saldo -= retiro;
};

// Instanciarlo
const jasmany = new Cliente("Jasmany", 100000);
console.log(jasmany);

// Acceder a los prototypes
console.log(jasmany.tipoCliente());

// Un prototype que accede a otros prototypes
console.log(jasmany.nombreClienteSaldo());

// reescribir un valor
jasmany.retiraSaldo(2000);

// comprobar saldo
console.log(jasmany.nombreClienteSaldo());
