from django.contrib import admin

from .models import Gallery

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


admin.site.register(Gallery)
# admin.site.register(Services)
# admin.site.register(Team)
# admin.site.register(Call_Back)
# admin.site.register(Sign_Up)