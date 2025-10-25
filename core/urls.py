from django.urls import path
from . import views

urlpatterns = [
    path('', views.principal, name="principal"),
    path('evento/<int:id>', views.informacion_evento, name="informacion_evento"),
    path('crear-cuenta/', views.crear_cuenta, name="crear_cuenta"),
    path('iniciar-sesion/', views.iniciar_sesion, name="iniciar_sesion"),
    path('cerrar-sesion/', views.cerrar_sesion, name="cerrar_sesion"),
    path('evento/<int:id>/registrar/', views.registrar_evento, name="registrar_evento")
]