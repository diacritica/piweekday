from django.contrib import admin
from piweekday.web.models import Poll, Choice

admin.site.register(Poll)
admin.site.register(Choice)