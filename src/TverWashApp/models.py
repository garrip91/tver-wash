from django.db import models

"""
Модель Services для страницы услуг(services.html)
Модель Gallery для страницы галереи работ(gellery.html)
Модель Team для описания участников организации, присутвует на главной странице(index.html) и на на странице о нас(about-us.html)
Модель Call_Back для формы модального окна для заказа звонка клиенту
Модель Sign_Up для формы модального окна для записи на консультацию
"""


class Services(models.Model):

    name = models.CharField(max_length=30, verbose_name='Название услуги')
    image = models.ImageField(verbose_name='Фото', upload_to='media/img/', null=False)
    about = models.TextField(max_length=1000, verbose_name='Описание')

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name = 'Услуги'
        verbose_name_plural = 'Услуги'
        ordering = ['id']


class Gallery(models.Model):

    image = models.ImageField(verbose_name='Фото для галереи', upload_to='media/img/', null=False)

    def __str__(self):
        return str(self.id)

    class Meta:
        verbose_name = 'Галерея'
        verbose_name_plural = 'Галерея'
        ordering = ['id']


class Team(models.Model):

    name = models.CharField(max_length=30, verbose_name='Имя')
    image = models.ImageField(verbose_name='Фото', upload_to='media/img/')
    about = models.TextField(max_length=1000, verbose_name='Краткая история')
    #number = models.IntegerField(verbose_name='Телефон', null=True)
    phone = models.CharField(max_length=18, verbose_name='Телефон', blank=True, null=True)

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name = 'Команда'
        verbose_name_plural = 'Команда'
        ordering = ['id']


class Call_Request(models.Model):

    name = models.CharField(max_length=30, verbose_name='Имя')
    #number = models.IntegerField(verbose_name='Телефон')
    phone = models.CharField(max_length=18, verbose_name='Телефон', blank=True, null=True)

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name = 'Заявки на звонок'
        verbose_name_plural = 'Заявки на звонок'
        ordering = ['id']


class Call_Appointment(models.Model):

    name = models.CharField(max_length=30, verbose_name='Имя')
    #number = models.IntegerField(verbose_name='Телефон')
    phone = models.CharField(max_length=18, verbose_name='Телефон', blank=True, null=True)
    address = models.TextField(max_length=100, verbose_name='Адрес')
    wishes = models.TextField(max_length=1000, verbose_name='Пожелания')

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name = 'Заявки на запись'
        verbose_name_plural = 'Заявки на запись'
        ordering = ['id']