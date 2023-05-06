from http.client import HTTPResponse

from django.db.models import QuerySet
from django.http import JsonResponse
from django.shortcuts import render

from rest_framework import generics
from rest_framework.decorators import api_view

from .models import *
from .serializers import *
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

#CBV
class UniversityListAPIView(generics.ListAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

class UniversityByIdAPIView(APIView):
    def get(self, request, id, *args, **kwargs):
        uni    = get_object_or_404(University, id=id)
        seruni = UniversitySerializer(uni, many=False)
        return JsonResponse(seruni.data, safe=False)

class TeacherListAPIView(generics.ListAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class TeacherByIdAPIView(APIView):
    def get(self, request, t_id, *args, **kwargs):
        teacher = get_object_or_404(Teacher, id=t_id)
        sert = TeacherSerializer(teacher, many=False)
        return JsonResponse(sert.data, safe=False)

@api_view(['GET'])
def getUniNameById(request, id):
    uni = get_object_or_404(University, id=id)
    seruni = UniversityNameSerializer(uni, many=False)
    return JsonResponse(seruni.data)
#FBV
@api_view(['GET'])
def top_ten_teachers(request):
    teachers = Teacher.objects.order_by('-rating')[:10]
    ser = TeacherSerializer(teachers, many=True)
    print(ser.data)
    return JsonResponse(ser.data, safe=False)


@api_view(['GET'])
def getTeachersByUni(request, *args, **kwargs):
    uni_id = kwargs['id']
    teachers = Teacher.objects.all().filter(university=uni_id)
    serTeach = TeacherSerializer(teachers, many=True)
    print(serTeach.data)
    return JsonResponse(serTeach.data, safe=False)
