from django.template.defaulttags import url
from django.urls import path
from .views import *
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns =[
    path('universities/', UniversityListAPIView.as_view()),
    path('university/<int:id>', UniversityByIdAPIView.as_view()),
    path('teachers', TeacherListAPIView.as_view()),
    path('teachers/top_ten', top_ten_teachers),
    path('teacher/<int:t_id>', TeacherByIdAPIView.as_view()),
    path('uni/<int:id>', getUniNameById),
    path('university/<int:id>/teachers', getTeachersByUni),
    path('login/', obtain_jwt_token),

]