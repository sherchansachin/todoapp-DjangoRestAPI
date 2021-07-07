from django.db import models
from rest_framework import serializers
from .models import Todo


class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('title', 'body', 'created', 'completed')