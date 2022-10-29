from django.urls import path
from django.views.generic import TemplateView

app_name = 'tracker'

urlpatterns = [
    path('', TemplateView.as_view(template_name='tracker/index.html')),
]