from django.shortcuts import render
from .models import Evento, ImagenEvento

def principal(request):
    return render(request, 'core/principal.html', {
        'datos_tarjeta': list(Evento.objects.values('id', 'titulo', 'imagenPrincipal', 'lugar')),
        'datos_evento': Evento.objects.all(),
    })

def informacion_evento(request, id):
    return render(request, 'core/informacion_evento.html', {
        'evento': Evento.objects.get(id=id),
    })