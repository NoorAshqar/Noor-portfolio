from django.contrib import admin
from django.urls import path
from base.views import ProjectInfoList

urlpatterns = [
    path('', ProjectInfoList.as_view()),

]