from django.urls import path
from .views import *

urlpatterns =[
    path('universities/', UniversityListAPIView.as_view()),
    path('university/<int:id>', UniversityByIdAPIView.as_view()),
    path('teachers', TeacherListAPIView.as_view()),
    path('teachers/top_ten', top_ten_teachers),
    path('teacher/<int:t_id>', TeacherByIdAPIView.as_view()),
    path('uni/<int:id>', getUniNameById),
    path('university/<int:id>/teachers', getTeachersByUni)
]