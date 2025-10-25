from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import Evento, ImagenEvento

def principal(request):
    return render(request, 'core/principal.html', {
        'datos_tarjeta': list(Evento.objects.values('id', 'titulo', 'imagenPrincipal', 'lugar')),
        'datos_evento': Evento.objects.all(),
    })

def informacion_evento(request, id):

    estado_registro = False
    if request.user.is_authenticated:
        id_usuario = request.user.id
        if Evento.objects.get(id=id).registrados.filter(id=id_usuario).exists():
            estado_registro = True

    return render(request, 'core/informacion_evento.html', {
        'evento': Evento.objects.get(id=id),
        'cupos': (Evento.objects.get(id=id).cantidad - Evento.objects.get(id=id).registrados.all().count()),
        'estado_registro': estado_registro
    })

def iniciar_sesion(request):
    if request.method == "POST":
        nombre_usuario = request.POST['nombre']
        contraseña = request.POST['contraseña']
        usuario = authenticate(username=nombre_usuario, password=contraseña)
        if usuario is not None:
            login(request, usuario)
            return redirect('principal')
        else:
            return render(request, 'core/iniciar_sesion.html', {
                'error':True,
            })
    else:
        return render(request, 'core/iniciar_sesion.html')
    
def cerrar_sesion(request):
    logout(request)
    return redirect('principal')

def crear_cuenta(request):
    if request.method == "POST":

        nombre_usuario = request.POST['nombre']
        correo = request.POST['correo']
        contraseña = request.POST['contraseña']
        
        user = User.objects.create_user(username=nombre_usuario, email=correo, password=contraseña)
        user.save()

        usuario = authenticate(username=nombre_usuario, password=contraseña)
        if usuario is not None:
            login(request, usuario)
            return redirect('principal')
    else:  
        return render(request, 'core/crear_cuenta.html', {})
    
def registrar_evento(request, id):
    evento = Evento.objects.get(id=id)
    evento.registrados.add(request.user)
    return redirect('informacion_evento', id=id)

def eliminar_registro_evento(request, id):

    evento = Evento.objects.get(id=id)
    evento.registrados.remove(request.user)
    return redirect(request.META.get('HTTP_REFERER', '/'), id=id)

def cuenta(request):

    estado_actualizar_usuario = True

    if request.method == 'POST':

        usuario = request.user
        if User.objects.filter(username=request.POST['nombre-usuario']).exists():
            estado_actualizar_usuario = False
        else:
            usuario.username = request.POST['nombre-usuario'] if request.POST             ['nombre-usuario'] != "" else usuario.username

            usuario.email = request.POST['correo'] if request.POST['correo'] != "" else usuario.email

            usuario.first_name = request.POST['nombre'] if request.POST['nombre'] != "" else usuario.first_name

            usuario.last_name = request.POST['apellido'] if request.POST['apellido'] != "" else usuario.last_name
            
            usuario.save()
        
    return render(request, 'core/cuenta.html', {
        'usuario':request.user,
        'eventos':request.user.eventos_registrados.order_by('fecha'),
        'estado_actualizar_usuario':estado_actualizar_usuario,
    })
