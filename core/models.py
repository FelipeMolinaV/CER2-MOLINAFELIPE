from django.db import models
from django.contrib.auth.models import User


class Evento(models.Model):
    titulo = models.CharField(max_length=35)
    fecha = models.DateTimeField()
    lugar = models.CharField(max_length=35)
    imagenPrincipal = models.URLField(max_length=300, default="")
    valor = models.PositiveIntegerField()
    cantidad = models.PositiveBigIntegerField(default=0)
    registrados = models.ManyToManyField(User, related_name='eventos_registrados', blank=True)

    def __str__(self):
        return self.titulo
    
class ImagenEvento(models.Model):
    url = models.URLField(max_length=300)
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.url

