from django.contrib import admin

from .models import *

"""
Здесь просто зарегистрировал модель, без излишков
"""

admin.site.register(Services)
admin.site.register(Gallery)
admin.site.register(Team)
admin.site.register(Call_Back)
admin.site.register(Sign_Up)
