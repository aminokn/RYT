from django.db import models
from django.core.validators import int_list_validator
class University(models.Model):
    name = models.CharField(max_length=70)
    img = models.URLField()
    description = models.TextField()
    url = models.URLField()

    def __str__(self):
        return f'{self.id} : {self.name}'

    class Meta:
        verbose_name = 'University'
        verbose_name_plural = 'Universities'

class Teacher(models.Model):
    fullname = models.CharField(max_length=70)
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='teacher')
    img = models.URLField()
    rating = models.FloatField()
    ratingCnt = models.IntegerField(default=1)
    description = models.TextField()
    url = models.URLField()

    def __str__(self):
        return f'{self.id} : {self.fullname}'