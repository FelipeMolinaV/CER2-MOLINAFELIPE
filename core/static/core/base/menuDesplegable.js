function desplegarMenu(boton){
    abrirMenu = boton.name == 'menu-outline' ? true : false
    menu = document.getElementById("menu")
    if (abrirMenu){
        menu.classList.remove("pointer-events-none")
        menu.classList.remove("opacity-0")
        boton.name = 'close-outline'
    }
    else {
        menu.classList.add("pointer-events-none")
        menu.classList.add("opacity-0")
        boton.name = 'menu-outline'
    }
}