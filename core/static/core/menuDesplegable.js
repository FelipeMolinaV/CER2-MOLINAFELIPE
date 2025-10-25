function desplegarMenu(boton){
    var menu = document.getElementById("menu")
    boton.name === 'menu-sharp' ? (boton.name = 'close-outline', menu.classList.add("opacity-100"),
                                    menu.classList.remove("pointer-events-none")):
                                    (boton.name = 'menu-sharp', menu.classList.remove("opacity-100"),
                                    menu.classList.add("pointer-events-none"))
}

function cerrarMenu(){
    var menu = document.getElementById("menu")
    var boton_menu = document.getElementById("boton_menu")
    menu.classList.remove("opacity-100")
    menu.classList.add("pointer-events-none")
    boton_menu.name = "menu-sharp"
}