// Seleccionar elementos del DOM nos va a permitir modificar nuestro HTML y hacerlo más interactivo..

// Veamos por ejemplo como modificar el texto de la parte superior..

// Primero tenemos que seleccionarlo...

const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

//Acceder al texto del h1 seleccionado hay 3 formas
// Primera
console.log(encabezado.innerText); // Muestra una cadena de caracteres, y no mostrara un texto que esta con visibility: hidden

// Segunda
console.log(encabezado.textContent); // Respeta si hay mas de un espaciado y si muestra un texto con la propiedad de css visibility: hidden

// Tercera
console.log(encabezado.innerHTML); // Tambien se trae el codigo HTML si hay un span

// Cual es la diferencia entre estas 3... bueno, si le ponemos a ese elemento visibility: hidden; en el CSS,

// Puedes ver que innerText no puede acceder a ese contenido...

// Ahora, si añadimos algo de HTML,

// TextContent va a ignorar esas etiquetas HTML y traer solo el texto, mientras que innerhTML si se trae el HTML..

// ahora también puedes tener algo de encadenamiento o chaining...
// Aqui vamos acceder al texto
const encabezado1 = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado1);

// Ahora, aquí puedes ver que estoy asignando el Texto a una variable, pero también puedes modificarlo de diferentes formas...
// Modifica el encabezado sobre el DOM
document.querySelector(".contenido-hero h1").textContent = "Nuevo Heading";

// otra opción seria con una variable.

const nuevoTexto = "Nuevo Heading";
document.querySelector(".contenido-hero h1").textContent = nuevoTexto;

// También puedes cambiar una imagen...

// No lo hemos visto, pero veamos por ejemplo como acceder a esa imagen, yo quiero la segunda
// const imagen = document.querySelector(".contenedor-cards .cardd img); // si hubiese querido la primera
// const imagen = document.querySelector(".contenedor-cards .card:nth-child(2)");
const imagen = document.querySelector(".card img");
console.log(imagen.src);
// Cambiar la imagen...
imagen.src = "img/hacer2.jpg";
