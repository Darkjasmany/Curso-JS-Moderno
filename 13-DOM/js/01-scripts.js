// 01- Vamos a abrir el capitulo 13-DOM y abrirlo en Live server

// Lo primero que haremos sera crear una carpeta llamada js / y en ella colocar el archivo scripts.js

let elemento;

elemento = document;
elemento = document.all;
// elemento = document.all[0];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.contentType;
elemento = document.forms; // devuleve el resultado como un arreglo, pero se lo conoce como HTMLcollection
elemento = document.forms[0]; // accedes por el indice como se dijo que es un arreglo
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList; // da las clases que tiene este formulario
elemento = document.forms[0].action;
elemento = document.links; // todos los enlaces que tengamos todos los que tengan la etiqueta a
elemento = document.links[4].id;
elemento = document.links[4].className; // clases que tiene pero las terno como un string
elemento = document.forms[4].classList; // clases que tiene pero las terno como un DOMToken, como un arreglo
elemento = document.forms[4].classList[0];
elemento = document.images; // cuantas imagenes tenemos en el proyecto, nos permite seleccionar todas
elemento = document.scripts; // seleccionar todos los scripts
elemento = document.scripts[2].getAttribute("src");
console.log(elemento);
stop();
