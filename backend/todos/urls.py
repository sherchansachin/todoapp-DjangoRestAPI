from typing import List
from django.urls import path

from .views import ListTodo, DetailTodo

urlpatterns = [ 
    path('<int:pk>/', DetailTodo.as_view()), # url path to only one to-do item (api/1)
    path('', ListTodo.as_view()), # url path to the list of to-dos
]