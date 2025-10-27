from django.contrib import admin
from .models import Evento, ImagenEvento

class EventoAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'ingreso']

    def ingreso(self, obj):
        return obj.registrados.count() * obj.valor

admin.site.register(ImagenEvento)
admin.site.register(Evento, EventoAdmin)
