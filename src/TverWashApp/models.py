from django.db import models


class Services(models.Model):
    image = models.ImageField(verbose_name='Фото', upload_to='TverWashApp/static/img/', null=False)
    name = models.CharField(max_length=30, verbose_name='Название услуги')
    about = models.TextField(max_length=1000, verbose_name='Описание')

    class Meta:
        verbose_name = 'Услуги'
        verbose_name_plural = 'Услуги'


class Gallery(models.Model):
    image = models.ImageField(verbose_name='Фото для галереи', upload_to='TverWashApp/static/img/', null=False)

    class Meta:
        verbose_name = 'Галерея'
        verbose_name_plural = 'Галерея'


class Team(models.Model):
    image = models.ImageField(verbose_name='Фото', upload_to='TverWashApp/static/img/')
    name = models.CharField(max_length=30, verbose_name='Имя')
    about = models.TextField(max_length=1000, verbose_name='Краткая история')

    class Meta:
        verbose_name = 'Команда'
        verbose_name_plural = 'Команда'


class Call_Back(models.Model):
    name = models.CharField(max_length=30, verbose_name='Имя')
    number = models.IntegerField(verbose_name='Телефон')

    class Meta:
        verbose_name = 'Заявки на звонок'
        verbose_name_plural = 'Заявки на звонок'


class Sign_Up(models.Model):
    name = models.CharField(max_length=30, verbose_name='Имя')
    number = models.IntegerField(verbose_name='Телефон')
    address = models.TextField(max_length=100, verbose_name='Адрес')
    wishes = models.TextField(max_length=1000, verbose_name='Пожелания')

    class Meta:
        verbose_name = 'Заявки на запись'
        verbose_name_plural = 'Заявки на запись'
