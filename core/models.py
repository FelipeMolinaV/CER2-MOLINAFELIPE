from django.db import models
from django.contrib.auth.models import User

class ImagenEvento(models.Model):
    url = models.URLField(max_length=300)

class Evento(models.Model):
    titulo = models.CharField(max_length=35)
    fecha = models.DateTimeField()
    lugar = models.CharField(max_length=35)
    url = models.ManyToManyField(ImagenEvento)
    valor = models.PositiveIntegerField()
    valor = models.PositiveBigIntegerField()
    registrados = models.ManyToManyField(User)


