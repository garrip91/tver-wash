
from statistics import mode
from django.db import models


class Services(models.Model):
    image = models.ImageField(verbose_name='Фото')
    name = models.CharField(max_length=30, verbose_name='Название услуги')
    about = models.TextField(max_length=1000, verbose_name='Описание')