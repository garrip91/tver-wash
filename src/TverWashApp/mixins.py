from django.views.generic import View
from .models import Call_Request, Call_Appointment
from .forms import CallRequestForm, CallAppointmentForm
from django.contrib import messages
from django.http import HttpResponseRedirect

from django.core.mail import send_mail
from django.http import HttpResponseNotFound


class MyFormMixin1(View):

    def dispatch(self, request, *args, **kwargs):
        #################### РЕАЛИЗУЕМ ПОЛУЧЕНИЕ ЗАЯВКИ ОТ ПОЛЬЗОВАТЕЛЯ: ####################
        if request.method == 'POST' and 'feedback1' in request.POST:
            call_request_form = CallRequestForm(request.POST)
            #print(call_request_form)
            #print(call_request_form.is_valid())
            if call_request_form.is_valid():
                CallRequestForm_name = call_request_form.cleaned_data.get('name')
                #print(CallRequestForm_name)
                CallRequestForm_phone = call_request_form.cleaned_data.get('phone')
                #print(CallRequestForm_phone)
                try:
                # send_mail(F'Вам поступила заявка от ***[[ ТЕСТ ]]*** с абонентским номером << +7 (999) 999-99-99 >>', F'***[[ ТЕСТ ]]*** с абонентским номером << +7 (999) 999-99-99 >> отправил Вам заявку на консультацию!', 'sarkis.bazayan@yandex.ru', ['sarkis.bazayan@yandex.ru'], fail_silently=False)
                    send_mail(F'Вам поступил заказ звонка от ***[[ {CallRequestForm_name} ]]*** с абонентским номером << {CallRequestForm_phone} >>', F'***[[ {CallRequestForm_name} ]]*** с абонентским номером << {CallRequestForm_phone} >> заказал(-а) звонок от Вас!', 'sarkis.bazayan@yandex.ru', ['sarkis.bazayan@yandex.ru'], fail_silently=False)
                    print(send_mail)
                except:
                    return HttpResponseNotFound('<h1>Письмо не отправлено</h1>')
                else:
                    print("ВАША ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА!")
                    messages.success(request, "ВАША ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА!")
                    call_request_form.save()
                    #return HttpResponseRedirect(self.request.path)
                    return HttpResponseRedirect(F'{self.request.path}#thanks')
            else:
                print("ЧТО-ТО ПОШЛО НЕ ТАК!")
                messages.error(request, 'НЕПРАВИЛЬНО ВВЕДЁН НОМЕР ТЕЛЕФОНА!')
                #return HttpResponseRedirect(self.request.META.get('HTTP_REFERER'))
                return HttpResponseRedirect(self.request.path)
        else:
            self.call_request_form = CallRequestForm()
        #####################################################################################
        # print(F'request.path == {request.path}')
        return super().dispatch(request, *args, **kwargs)


class MyFormMixin2(View):

    def dispatch(self, request, *args, **kwargs):
        #################### РЕАЛИЗУЕМ ПОЛУЧЕНИЕ ЗАЯВКИ ОТ ПОЛЬЗОВАТЕЛЯ: ####################
        if request.method == 'POST' and 'feedback2' in request.POST:
            call_appointment_form = CallAppointmentForm(request.POST)
            #print(call_appointment_form)
            if call_appointment_form.is_valid():
                CallAppointmentForm_name = call_appointment_form.cleaned_data.get('name')
                #print(CallAppointmentForm_name)
                CallAppointmentForm_phone = call_appointment_form.cleaned_data.get('phone')
                #print(CallAppointmentForm_phone)
                CallAppointmentForm_address = call_appointment_form.cleaned_data.get('address')
                #print(CallAppointmentForm_address)
                CallAppointmentForm_wishes = call_appointment_form.cleaned_data.get('wishes')
                #print(CallAppointmentForm_address)
                try:
                    send_mail(F'Вам поступила запись на консультацию от ***[[ {CallAppointmentForm_name} ]]*** с абонентским номером << {CallAppointmentForm_phone} >>', F'[name] {CallAppointmentForm_name} [/name] с абонентским номером [phone] {CallAppointmentForm_phone} [/phone], проживающий(-ая) по адресу: [address] {CallAppointmentForm_address} [/address], записался(-ась) к Вам на консультацию, а также оставил(-а) следующее пожелание: [wishes] {CallAppointmentForm_wishes} [/wishes]!', 'sarkis.bazayan@yandex.ru', ['sarkis.bazayan@yandex.ru'], fail_silently=False)
                    print(send_mail)
                except:
                    return HttpResponseNotFound('<h1>Письмо не отправлено</h1>')
                else:
                    print("ВАША ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА!")
                    messages.success(request, "ВАША ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА!")
                    call_appointment_form.save()
                    return HttpResponseRedirect(F'{self.request.path}#thanks')
            else:
                print("ЧТО-ТО ПОШЛО НЕ ТАК!")
                messages.error(request, 'НЕПРАВИЛЬНО ВВЕДЁН НОМЕР ТЕЛЕФОНА!')
                return HttpResponseRedirect(self.request.path)
        else:
            self.call_appointment_form = CallAppointmentForm()
        #####################################################################################
        # print(F'request.path == {request.path}')
        return super().dispatch(request, *args, **kwargs)