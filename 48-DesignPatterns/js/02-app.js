// Constructor Pattern es cuando utilizamos una clase base

class Persona {
    constructor(nombre, email, empresa) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

class Empresa extends Persona {
    constructor(nombre, email, razonSocial, direccion) {
        super(nombre, email);
        this.razonSocial = razonSocial;
        this.direccion = direccion;
    }
}

const persona = new Persona("Juan", "correo@correo.com");
console.log(persona);

const cliente = new Cliente("Miguel", "cliente@cliente.com", "Código Con Juan");
console.log(cliente);

const empresa = new Empresa(
    "Jasmany",
    "jasmanyfranco@gmail.com",
    "NicoTech",
    "Naranjal"
);
console.log(empresa);
