const cargarJsonBtn = document.querySelector("#cargarJSON");
cargarJsonBtn.addEventListener("click", obtenerDatosJson);

function obtenerDatosJson() {
    // console.log("todo ok");
    const urlJson = "data/empleado.json";

    fetch(urlJson)
        .then((respuesta) => {
            // console.log(respuesta);
            return respuesta.json();
        })
        .then((resultado) => {
            // console.log(datos);
            mostrarHTML(resultado);
        })
        .catch((error) => {
            console.log(error);
        });
}

function mostrarHTML({ empresa, id, nombre, trabajo }) {
    const contenido = document.querySelector(".contenido");
    contenido.innerHTML = `
      <p>Empleado: ${nombre}</p>
      <p>ID: ${id}</p>
      <p>Trabajo: ${trabajo}</p>
      <p>Empresa: ${empresa}</p>
      `;
}
