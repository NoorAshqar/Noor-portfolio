from django.shortcuts import render
from base.serializers import ProjectInfoSerializer
# Create your views here.
from rest_framework import generics
from base.models import ProjectInfo

class ProjectInfoList(generics.ListCreateAPIView):
    queryset = ProjectInfo.objects.all()
    serializer_class = ProjectInfoSerializer
