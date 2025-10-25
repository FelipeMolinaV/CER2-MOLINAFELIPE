function crearContenedorTarjetas(){

    const contenedor = document.createElement('div')
    contenedor.className = 'h-[80vh] px-[10vw]'

    const grilla = document.createElement('div')
    grilla.className = 'h-full grid grid-rows-3 grid-cols-4 gap-2'

    contenedor.appendChild(grilla)

    return contenedor
}

// en los parametros se puede ingresar los datos del contexto de la vista
function crearTarjeta(espacio){

    const tarjeta = document.createElement('a')
    tarjeta.classList = `evento bg-white hover:scale-101 transition-transform row-span-${espacio.filas} col-span-${espacio.columnas} flex flex-col`

    tarjeta.style.display = "block"

    const h1 = document.createElement('h1')

    tarjeta.appendChild(h1)

    return tarjeta
}

function actualizarTarjeta(tarjeta, datos){
    //tarjeta.href = urlPrueba.replace("0", datos.id)
    const titulo = tarjeta.querySelectorAll('h1')[0]
    titulo.textContent = `${datos.titulo} - ${datos.id}`
}