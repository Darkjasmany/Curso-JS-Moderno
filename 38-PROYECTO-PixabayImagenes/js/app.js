const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.onload = () => {
    formulario.addEventListener("submit", validarFormulario);
};

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector("#termino").value;

    if (terminoBusqueda === "") {
        mostrarAlerta("Agrega un término de busqueda");
        return;
    }

    buscarImagenes(terminoBusqueda);
}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector(".alerta");

    if (!existeAlerta) {
        const alerta = document.createElement("P");
        alerta.classList.add(
            "alerta",
            "bg-red-100",
            "border-red-400",
            "text-red-700",
            "px-4",
            "py-3",
            "rounded",
            "max-w-lg",
            "mx-auto",
            "mt-6",
            "text-center"
        );

        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
      `;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function buscarImagenes(terminoBusqueda) {
    const key = "43322422-3688c929e8da6372bba452e66";
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}`;

    // console.log(url);
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => {
            mostrarImagenes(resultado.hits);
        });
}

function mostrarImagenes(imagenes) {
    console.log(imagenes);
}
