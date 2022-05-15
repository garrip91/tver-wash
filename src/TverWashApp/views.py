from django.shortcuts import render

from django.views import View
from django.views.generic.list import ListView
from .models import Services, Gallery, Team, Call_Request, Call_Appointment

from .forms import CallRequestForm, CallAppointmentForm
from .mixins import MyFormMixin1, MyFormMixin2

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


class HomePageView(MyFormMixin1, MyFormMixin2, View):
    form_class1 = CallRequestForm
    form_class2 = CallAppointmentForm

    def get(self, request, *args, **kwargs):
        context = {
            'form1': self.form_class1(request.POST),
            'form2': self.form_class2(request.POST),
        }
        return render(request, 'TverWashApp/home.html', context=context)

    def post(self, request, *args, **kwargs):
        context = {
            'form1': self.form_class1(request.POST),
            'form2': self.form_class2(request.POST),
        }
        return render(request, 'TverWashApp/home.html', context=context)


class All_Servises(MyFormMixin1, MyFormMixin2, ListView):
    queryset = Services.objects.all()
    context_object_name = 'services'
    template_name = "TverWashApp/services.html"

    form_class1 = CallRequestForm
    form_class2 = CallAppointmentForm

    def get(self, request, *args, **kwargs):
        services = self.queryset
        context = {
            'form1': self.form_class1(request.POST),
            'form2': self.form_class2(request.POST),
            'services': services,
        }
        return render(request, "TverWashApp/services.html", context=context)

    def post(self, request, *args, **kwargs):
        services = self.queryset
        context = {
            'form1': self.form_class1(request.POST),
            'form2': self.form_class2(request.POST),
            'services': services,
        }
        return render(request, "TverWashApp/services.html", context=context)


class Gallery(ListView):
    queryset = Gallery.objects.all()
    context_object_name = 'photos'
    template_name = "TverWashApp/gallery.html"

    form_class1 = CallRequestForm
    form_class2 = CallAppointmentForm

    def get(self, request, *args, **kwargs):
        gallery = self.queryset
        context = {
            'form1': self.form_class1(request.POST),
            'form2': self.form_class2(request.POST),
            'photos': gallery,
        }
        return render(request, "TverWashApp/gallery.html", context=context)

    def post(self, request, *args, **kwargs):
        gallery = self.queryset
        context = {
            'form1': self.form_class1(request.POST),
            'form2': self.form_class2(request.POST),
            'photos': gallery,
        }
        return render(request, 'TverWashApp/gallery.html', context=context)


class About_Us(ListView):
    queryset = Team.objects.all()
    context_object_name = 'team'
    template_name = "TverWashApp/about-us.html"

    form_class1 = CallRequestForm
    form_class2 = CallAppointmentForm

    def get(self, request, *args, **kwargs):
        team = self.queryset
        context = {
            'form1': self.form_class1(request.POST),
            'form2': self.form_class2(request.POST),
            'team': team,
        }
        return render(request, "TverWashApp/about-us.html", context=context)

    def post(self, request, *args, **kwargs):
        team = self.queryset
        context = {
            'form1': self.form_class1(request.POST),
            'form2': self.form_class2(request.POST),
            'team': team,
        }
        return render(request, 'TverWashApp/about-us.html', context=context)
