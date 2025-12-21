from django.shortcuts import render
from django.urls import path, include

from . import views

# Define a list of URL patterns

urlpatterns = [
    path('',views.index, name='index'),
    path('',include('asiaTour.urls')),
]  # '' indicates the root URL for this app
# Each pattern maps a URL to a view function