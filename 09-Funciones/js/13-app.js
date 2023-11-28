// Llevar a arroy function
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción id ${id}`);
    },
    pausar: function () {
        console.log("pausando...");
    },
    borrar: function (id) {
        console.log(`Borrando canción con id: ${id}`);
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`);
    },
};

// Resultado
// Arrow functions en métodos de propiedad

const reproductor1 = {
    cancion: "",
    reproducir: (id) => console.log(`Reproduciendo canción id ${id}`),
    pausar: () => console.log("pausando..."),
    borrar: (id) => console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: (nombre) => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: (nombre) =>
        console.log(`Reproduciendo la Playlist ${nombre}`),

    // También existen los Set y Get si tienes experiencia con esos términos, y si no, set es para añadir un valor, get es para obtenerlo...
    // Set agregar valores
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    // Get obteber valores
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    },
};
reproductor1.reproducir(30);
reproductor1.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {

// }
reproductor1.borrar(20);
reproductor1.crearPlaylist("Heavy Metal");
reproductor1.reproducirPlaylist("Heavy Metal");

// Probando set y get se utilizando de la siguiente forma
reproductor1.nuevaCancion = "Enter Sandman";
reproductor1.obtenerCancion;
