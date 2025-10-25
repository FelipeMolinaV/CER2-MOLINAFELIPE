from django.urls import path
from . import views

urlpatterns = [
    path('', views.principal, name="principal"),
    path('evento/<int:id>', views.informacion_evento, name="informacion_evento"),
    path('crear/', views.crear_cuenta, name="crear_cuenta"),
]