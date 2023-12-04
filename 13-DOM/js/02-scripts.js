// En este video estaremos viendo como seleccionar elementos por su clase...

// Seleccionando el header...

// Todos tus selectores inician con document...

// Seleccionar elementos por su clase forma antigua

let header = document.getElementsByClassName("header"); // Es muy importante las mayusculas y minusculas...
console.log(header);

let hero = document.getElementsByClassName("hero");
console.log(hero);

// Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

// Si una clase no existe, no va a retornar nada...
const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste);
