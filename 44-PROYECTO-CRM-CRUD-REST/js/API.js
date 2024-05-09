const url = "http://localhost:4000/clientes";

export const nuevoCliente = async (cliente) => {
    // console.log(cliente);

    try {
        await fetch(url, {
            method: "POST",
            // cogemos el cliente y lo convertimos en string lo mandamos a la url por el metodo POST
            body: JSON.stringify(cliente),
            // informacion del tipo de dato
            headers: { "Content-Type": "application/json" },
        });

        // Si se redirige es porque se inserto correctamente el cliente
        window.location.href = "index.html";
    } catch (error) {
        console.error(error);
    }
};
