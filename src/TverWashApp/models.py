
from django.db import models


class Services(models.Model):
    #image = models.ImageField(verbose_name='Фото',upload_to='TverWashApp/static/img/')
    name = models.CharField(max_length=30, verbose_name='Название услуги')
    about = models.TextField(max_length=1000, verbose_name='Описание')


class Gallery(models.Model):
    #image = models.ImageField(verbose_name='Фото для галереи', upload_to='TverWashApp/static/img/')
    pass