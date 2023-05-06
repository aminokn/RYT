from rest_framework import serializers
from .models import *


class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = "__all__"

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"

class UniversityNameSerializer(serializers.Serializer):
    name = serializers.CharField()
    id   = serializers.IntegerField()