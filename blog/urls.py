from django.urls import path

from . import views

# APP_NAME = 'blog'
urlpatterns = [
    path('category/', views.category),
]