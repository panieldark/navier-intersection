from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', canvas_view, name='canvas'),
]

app_name = 'canvas'
