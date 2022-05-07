from django.shortcuts import render

from django.views import View
from django.views.generic.list import ListView
from .models import *

from .forms import CallRequestForm, CallAppointmentForm
from .mixins import MyFormMixin1

"""
HomePageView - класс основной страницы, имеет методы get и post для корректной работы форм 
обратной связи и заказа звонка на странице.

All_Servises - класс для представления страницы всех услуг, использовал ListView, так как
этот класс удобнее для представления статических страниц, так же имеет метод post для 
корректной работы форм в модальных окон.

Gallery - класс для представления галереи работ, такой же как и All_Servises.

About_Us - класс для представления страницы о нас.

------------------------------------------------------------------------------------------------------
queryset - это запросы к бд, здесь queryset это получение всех полей таблицы бе фильтров
context_object_name - имя передаваемое в django-templates на html страницу
template_name - это html страница, которую мы обрабатываем


"""



class HomePageView(MyFormMixin1, View):

    form_class1 = CallRequestForm
    form_class2 = CallAppointmentForm

    def get(self, request, *args, **kwargs):
        form1 = self.form_class1(request.POST)
        #print(form1)
        form2 = self.form_class2(request.POST)
        return render(request, 'TverWashApp/home.html', context={'form1': form1, 'form2': form2})
    def post(self, request, *args, **kwargs):
        form1 = self.form_class1(request.POST)
        #print(form1)
        form2 = self.form_class2(request.POST)
        return render(request, 'TverWashApp/home.html', context={'form1': form1, 'form2': form2})


class All_Servises(ListView, MyFormMixin1):
    queryset = Services.objects.all()
    context_object_name = 'services'
    template_name = "TverWashApp/services.html"

    def post(self, request, *args, **kwargs):
        return render(request, "TverWashApp/services.html", context={})


class Gallery(ListView, MyFormMixin1):
    queryset = Gallery.objects.all()
    context_object_name = 'photos'
    template_name = "TverWashApp/gallery.html"

    def post(self, request, *args, **kwargs):
        return render(request, 'TverWashApp/gallery.html', context={})


class About_Us(ListView, MyFormMixin1):
    queryset = Team.objects.all()
    context_object_name = 'team'
    template_name = "TverWashApp/about-us.html"

    def post(self, request, *args, **kwargs):
        return render(request, 'TverWashApp/about-us.html', context={})
