from django.contrib import admin
from django.urls import path

from TverWashApp.views import *

from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('admin/', admin.site.urls),
    path('services/', All_Servises.as_view(), name='services'),
    path('gallery/', Gallery.as_view(), name='gallery'),
    path('about_us/', About_Us.as_view(), name='about_us'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# if settings.DEBUG:
    # urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
