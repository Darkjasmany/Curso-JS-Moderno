const url = "http://localhost:4000/clientes";

// Cuando se crea nuevo cliente
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

// Obtener todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.error(error);
    }
};

// Elimina 1 Cliente
export const eliminarCliente = async (id) => {
    try {
        // console.log(id);
        // Esto inyecta en la url el id a eliminar
        await fetch(`${url}/${id}`, { method: "DELETE" });
    } catch (error) {
        console.error(error);
    }
};

// Obtiene un cliente por su id
export const obtenerCliente = async (id) => {
    try {
        // console.log(id);
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.error(error);
    }
};

// Actualiza un registro
export const editarCliente = async (cliente) => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: "PUT",
            body: JSON.stringify(cliente),
            headers: {
                "Content-Type": "application/json",
            },
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
};
