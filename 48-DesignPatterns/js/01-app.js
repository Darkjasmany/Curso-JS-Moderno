// Class Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Empresa {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
}

const persona = new Persona("Juan", "correo@correo.com");

console.log(persona);

const empresa = new Empresa("NicoTech", "Naranjal");
console.log(empresa);
