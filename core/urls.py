from django.urls import path
from . import views

urlpatterns = [
    path('', views.principal, name="principal"),
    path('eventos/', views.eventos, name="eventos"),
    path('eventos/<int:id>', views.informacion_evento, name="informacion_evento"),
    path('crear-cuenta/', views.crear_cuenta, name="crear_cuenta"),
    path('iniciar-sesion/', views.iniciar_sesion, name="iniciar_sesion"),
    path('cerrar-sesion/', views.cerrar_sesion, name="cerrar_sesion"),
    path('eventos/<int:id>/registrar/', views.registrar_evento, name="registrar_evento"),
    path('eventos/<int:id>/eliminar/', views.eliminar_registro_evento, name="eliminar_registro_evento"),
    path('cuenta/', views.cuenta, name="cuenta"),
]