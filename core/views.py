from django.shortcuts import render
from .models import Evento, ImagenEvento

def principal(request):
    return render(request, 'core/principal.html', {
        'datos_tarjeta': list(Evento.objects.values('id', 'titulo', 'imagenPrincipal', 'lugar')),
        'datos_evento': Evento.objects.all(),
    })