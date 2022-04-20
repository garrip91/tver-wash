from django.shortcuts import render

from django.views import View
from django.views.generic.list import ListView
import os
from pathlib import Path
from .models import *

class HomePageView(View):
    def get(self, request, *args, **kwargs):
        #user_form = UserForm()
        return render(request, 'TverWashApp/index.html', context={})

    def post(self, request, *args, **kwargs):
        return render(request, 'TverWashApp/index.html', context={})

class All_Servises(ListView):
    queryset = Services.objects.all()
    context_object_name = 'services'
    template_name = "TverWashApp/services.html"