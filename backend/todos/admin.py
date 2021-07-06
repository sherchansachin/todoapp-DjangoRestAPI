from django.contrib import admin

from .models import Todo

# descriptive overview in the admin Panel

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'body', 'created', 'completed')


admin.site.register(Todo, TodoAdmin)