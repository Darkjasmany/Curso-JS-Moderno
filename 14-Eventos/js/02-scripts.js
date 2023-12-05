// En este video estaremos viendo eventos que ocurren con el mouse

const nav = document.querySelector(".navegacion");

// Registrar un evento

// Dando un click
// nav.addEventListener("click", () => {
//     console.log("Estoy dando un click");
// });

// Pasando el cursor sobre la navegacion
nav.addEventListener("mouseenter", () => {
    console.log("entrando a navegacion");

    nav.style.backgroundColor = "white";
});

// Sacando el cursos de la seccion de navegacion
nav.addEventListener("mouseout", () => {
    console.log("saliendo de la navegacion");

    nav.style.backgroundColor = "transparent";
});

// otros eventos abarcan...

// mousedown - // cuando presionamos
// click - similar, de hecho es probablemente el más utilizado..
// dbclick - doble click como cuando quieres abrir un archivo
// mouseup - al soltar
//
