from django.contrib import admin

from .models import Gallery, Services, Team, Call_Request, Call_Appointment

from django.utils.safestring import mark_safe

"""
Здесь просто зарегистрировал модель, без излишков
"""
# Register your models here.
class GalleryAdmin(admin.ModelAdmin):

    class Meta:
        model = Gallery

    def get_image(self, obj):
        return mark_safe(F'<img src={obj.image.url} width="100" height="100">')
    get_image.short_description = 'Изображение'

    list_display = ('image', 'get_image', 'id')
    readonly_fields = ('get_image',)


class ServicesAdmin(admin.ModelAdmin):

    class Meta:
        model = Services

    def get_image(self, obj):
        return mark_safe(F'<img src={obj.image.url} width="100" height="100">')
    get_image.short_description = 'Изображение'

    list_display = ('name', 'image', 'get_image', 'about', 'id')
    readonly_fields = ('get_image',)


class TeamAdmin(admin.ModelAdmin):

    class Meta:
        model = Team

    def get_image(self, obj):
        return mark_safe(F'<img src={obj.image.url} width="100" height="100">')
    get_image.short_description = 'Изображение'

    list_display = ('name', 'image', 'get_image', 'about', 'phone', 'id')
    readonly_fields = ('get_image',)


class CallBackAdmin(admin.ModelAdmin):

    class Meta:
        model = Call_Request

    list_display = ('name', 'phone', 'id')


class SignUpAdmin(admin.ModelAdmin):

    class Meta:
        model = Call_Appointment

    list_display = ('name', 'phone', 'address', 'wishes', 'id')


admin.site.register(Gallery, GalleryAdmin)
admin.site.register(Services, ServicesAdmin)
admin.site.register(Team, TeamAdmin)
admin.site.register(Call_Request, CallBackAdmin)
admin.site.register(Call_Appointment, SignUpAdmin)