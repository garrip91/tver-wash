from django import forms

from .models import Call_Request, Call_Appointment



class CallRequestForm(forms.ModelForm):

    class Meta:
        model = Call_Request
        fields = ['name', 'phone']
        name = forms.CharField(required=True)
        phone = forms.CharField(required=True)


class CallAppointmentForm(forms.ModelForm):

    class Meta:
        model = Call_Appointment
        fields = ['name', 'phone', 'address', 'wishes']
        name = forms.CharField(required=True)
        phone = forms.CharField(required=True)
        address = forms.CharField(required=True)
        wishes = forms.CharField(required=False)