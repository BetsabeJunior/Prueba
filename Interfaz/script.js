async function buscarNumerosPerfectos() {
    const { numeroInicial, numeroFinal } = obtenerNumeros();

    if (!sonNumerosValidos(numeroInicial, numeroFinal)) {
        mostrarError("Por favor ingresa un rango válido de números enteros positivos.");
        return;
    }

    deshabilitarInterfaz();

    try {
        const numerosPerfectos = await obtenerNumerosPerfectos(numeroInicial, numeroFinal);
        mostrarResultados(numerosPerfectos);
    } catch (error) {
        mostrarError("Se produjo un error al obtener los datos del servidor.");
    } finally {
        habilitarInterfaz();
    }
}

function obtenerNumeros() {
    const numeroInicial = parseInt(document.getElementById("numeroInicial").value);
    const numeroFinal = parseInt(document.getElementById("numeroFinal").value);
    return { numeroInicial, numeroFinal };
}


function sonNumerosValidos(numeroInicial, numeroFinal) {
    return !isNaN(numeroInicial) && !isNaN(numeroFinal) && numeroInicial > 0 && numeroFinal > 0 && numeroInicial <= numeroFinal;
}


function deshabilitarInterfaz() {
    const elementos = document.querySelectorAll("#numeroInicial, #numeroFinal, #botonBuscar");
    elementos.forEach(elemento => elemento.disabled = true);
}


function habilitarInterfaz() {
    const elementos = document.querySelectorAll("#numeroInicial, #numeroFinal, #botonBuscar");
    elementos.forEach(elemento => elemento.disabled = false);
}


async function obtenerNumerosPerfectos(numeroInicial, numeroFinal) {
    const response = await fetch(`https://localhost:7038/api/NumerosPerfectos?desde=${numeroInicial}&hasta=${numeroFinal}`);
    if (!response.ok) {
        throw new Error("Error en la solicitud al servidor.");
    }
    return await response.json();
}


function mostrarResultados(numerosPerfectos) {
    const listaNumerosPerfectos = document.getElementById("listaNumerosPerfectos");
    listaNumerosPerfectos.innerHTML = "";

    if (numerosPerfectos.length > 0) {
        const card = document.createElement("div");
        card.className = "card mt-5";
        card.innerHTML = `
            <div class="card-header bg-primary text-white">
                <h2 class="card-title text-center">Números Perfectos Encontrados</h2>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    ${numerosPerfectos.map(numero => `<li class="list-group-item">${numero}</li>`).join("")}
                </ul>
            </div>
        `;
        listaNumerosPerfectos.appendChild(card);
    } else {
        const alerta = document.createElement("div");
        alerta.className = "alert alert-info text-center";
        alerta.textContent = "No se encontraron números perfectos en el rango dado.";
        listaNumerosPerfectos.appendChild(alerta);
    }
}


function mostrarError(mensaje) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: mensaje,
    });
}
