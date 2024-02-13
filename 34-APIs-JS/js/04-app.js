// ejecutar el sitio web en pantalla completa...

const abrirBtn = document.querySelector("#abrir-pantalla-completa");
const salirBtn = document.querySelector("#salir-pantalla-completa");

abrirBtn.addEventListener("click", pantallaCompleta);
salirBtn.addEventListener("click", cerrarPantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen(); // Quiero que todo el sistio ocupe pantalla completa, podemos definir que queremos que este pantalla completa
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}
