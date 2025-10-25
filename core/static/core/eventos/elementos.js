function crearContenedorTarjetas(){

    const contenedor = document.createElement('div')
    contenedor.className = 'h-[80vh] px-[10vw] md:px-[5vw]'

    const grilla = document.createElement('div')
    grilla.className = 'h-full grid grid-rows-3 grid-cols-4 gap-2'

    contenedor.appendChild(grilla)

    return contenedor
}

// en los parametros se puede ingresar los datos del contexto de la vista
function crearTarjeta(espacio){

    const tarjeta = document.createElement('a')
    tarjeta.classList = `relative evento bg-white row-span-1 col-span-4 md:row-span-${espacio.filas} md:col-span-${espacio.columnas} overflow-hidden z-0 hover:scale-101 transition-transform hover:cursor-pointer`
    tarjeta.style.display = "block"

    // elementos de la tarjeta
    const titulo = document.createElement('h1')
    const imagen = document.createElement('img')
    const ubicacion = document.createElement('h2')

    tarjeta.appendChild(titulo)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(ubicacion)

    return tarjeta
}

function actualizarTarjeta(tarjeta, datos){
    //tarjeta.href = urlPrueba.replace("0", datos.id)

    // Titulo
    const titulo = tarjeta.querySelectorAll('h1')[0]
    titulo.textContent = datos.titulo
    titulo.classList = "absolute top-2 left-3 z-50 text-white text-1xl font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"

    // imagen
    const imagen = tarjeta.querySelectorAll('img')[0]
    imagen.src = datos.img
    imagen.classList = "object-cover opacity-85 absolute inset-0 h-full w-full bottom-0 hover:contrast-85 h)over:opacity-100 z-10 hover:scale-105 transition-transform"

    // ubicacion
    const ubicacion = tarjeta.querySelectorAll('h2')[0]
    ubicacion.textContent = datos.ubicacion
    ubicacion.classList = "absolute bottom-2 right-3 z-50 text-white font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"


}