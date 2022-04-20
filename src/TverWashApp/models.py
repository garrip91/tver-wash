
from django.db import models


class Services(models.Model):
    #image = models.ImageField(verbose_name='Фото',upload_to='TverWashApp/static/img/')
    name = models.CharField(max_length=30, verbose_name='Название услуги')
    about = models.TextField(max_length=1000, verbose_name='Описание')


class Gallery(models.Model):
    image = models.ImageField(verbose_name='Фото для галереи', upload_to='TverWashApp/static/img/')

class Team(models.Model):
    image = models.ImageField(verbose_name='Фото',upload_to='TverWashApp/static/img/')
    name = models.CharField(max_length=30, verbose_name='Имя')
    about = models.TextField(max_length=1000, verbose_name='Краткая история')

class Call_Back(models.Model):
    name = models.CharField(max_length=30, verbose_name='Имя')
    number = models.IntegerField(max_length=11, verbose_name='Телефон')

class Sign_Up(models.Model):
    name = models.CharField(max_length=30, verbose_name='Имя')
    number = models.IntegerField(max_length=11, verbose_name='Телефон')
    address = models.TextField(max_length=100, verbose_name='Адрес')
    wishes = models.TextField(max_length=1000, verbose_name='Пожелания')
