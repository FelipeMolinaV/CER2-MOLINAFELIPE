function GenerarListaTarjetas(coordenadas){

    let listaTarjetas = new Array()

    for (let fil = 0; fil < 3; fil++){
        for (let col = 0; col < 4; col++){
            
            if ([fil, col] in coordenadas){
                const pieza = coordenadas[[fil,col]]
                listaTarjetas.push(crearTarjeta({
                    'filas':formas[pieza][0],
                    'columnas':formas[pieza][1]
                }))
            }
        }
    }

    return listaTarjetas
}

// Forma: filas, columnas, cantidad por grilla
const formas = {
    'A': [2, 2, 1],
    'B': [2, 1, 2],
    'C': [1, 1, 4]
}

document.addEventListener('DOMContentLoaded', () => {

    let cantidadTarjetas = 14
    const cantidadMatrices = Math.ceil(cantidadTarjetas/7)
    const seccionEventos = document.getElementById('seccion-eventos')
    
    for (let i = 0; i < cantidadMatrices; i++){

        // Aqui se agrega por matriz el contenedor del div que posee la grilla
        // Se rellena la matriz con piezas
        // En ese mismo instante se agregan los datos de las tarjetas (columnas y filas) en una lista
        // el indice de esta corresponde a la posicion que se avanza en la matriz de izquierda a derecha y de arriba a abajo con intervalos de 1 a 1

        let grilla = [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
        ]

        let coordenadas = {}

        // Agregar 1 pieza 'A'
        let fil = Math.floor(Math.random() * 2);
        let col = Math.floor(Math.random() * 3);

        const limiteFila = fil + formas['A'][0]
        const limiteColumna = col + formas['A'][1]

        coordenadas[[fil, col]] = 'A'
        for (filAux = fil; filAux < limiteFila && cantidadTarjetas > 0; filAux++){
            for (colAux = col; colAux < limiteColumna; colAux++){
                grilla[filAux][colAux] = 'A'
            }
        }
        cantidadTarjetas--
        
        // Agregar 2 piezas 'B'
        for (let c = 1; c <= 2 && cantidadTarjetas > 0;){
            let fil = Math.floor(Math.random() * 2);
            let col = Math.floor(Math.random() * 4);

            const limiteFila = fil + formas['B'][0]
            const limiteColumna = col + formas['B'][1]

            let disponible = true
            for (let filAux = fil; filAux < limiteFila; filAux++){
                for (let colAux = col; colAux < limiteColumna; colAux++){
                    if (grilla[filAux][colAux] != ''){
                        disponible = false
                    }
                }
            }

            if (disponible){
                coordenadas[[fil, col]] = 'B'
                for (let filAux = fil; filAux < limiteFila; filAux++){
                    for (let colAux = col; colAux < limiteColumna; colAux++){
                        grilla[filAux][colAux] = 'B'
                    }
                }
                c++
                cantidadTarjetas--
            }
        }
        

        // Agregar 4 piezas 'C'
        for (let fil = 0; fil < 3 && cantidadTarjetas > 0; fil++){
            for (let col = 0; col < 4 && cantidadTarjetas > 0; col++){
                if (grilla[fil][col] == ''){
                    coordenadas[[fil, col]] = 'C'
                    grilla[fil][col] = 'C'
                    cantidadTarjetas--
                }
            }
        }

 

        // Crear lista de elementos tarjeta
        listaTarjetas = GenerarListaTarjetas(coordenadas)

        // Agregar tarjetas al contenedor de tarjetas
        const contenedorTarjetas = crearContenedorTarjetas()
        listaTarjetas.forEach(tarjeta => {
            contenedorTarjetas.firstElementChild.appendChild(tarjeta)
        });

        // Agregar bloque de tarjetas
        seccionEventos.appendChild(contenedorTarjetas)
    }

    datos = [
        {
            'titulo':"Orquesta Andina",
            'id':0,
            'img':"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            'ubicacion':"Valparaiso"
        },
        {
            'titulo':"Esta es el concierto de Chile",
            'id':1,
            'img':"https://media.admagazine.com/photos/618a5f0d51ab72df0a764019/master/w_1600,c_limit/88529.jpg",
            'ubicacion':'Santiago de chile',
        },
        {
            'titulo':"Titulo",
            'id':2,
            'img':"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        },
        {
            'titulo':"Titulo",
            'id':3,
            'img':"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        },
        {
            'titulo':"Titulo",
            'id':4,
            'img':"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        },
        {
            'titulo':"Titulo",
            'id':5,
            'img':"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        },
        {
            'titulo':"Titulo",
            'id':6,
            'img':"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        },
        {
            'titulo':"Titulo",
            'id':7,
            'img':"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        },
    ]

    tarjetas = document.querySelectorAll('a.evento')
    tarjetas.forEach((tarjeta, indice)=> {
        actualizarTarjeta(tarjeta, datos[indice])
    })

})