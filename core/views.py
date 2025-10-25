from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import Evento, ImagenEvento

def principal(request):
    return render(request, 'core/principal.html', {
        'datos_tarjeta': list(Evento.objects.values('id', 'titulo', 'imagenPrincipal', 'lugar')),
        'datos_evento': Evento.objects.all(),
    })

def informacion_evento(request, id):
    return render(request, 'core/informacion_evento.html', {
        'evento': Evento.objects.get(id=id),
        'cupos': (Evento.objects.get(id=id).cantidad - Evento.objects.get(id=id).registrados.all().count())
    })

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