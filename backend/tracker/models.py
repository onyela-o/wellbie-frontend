from select import KQ_FILTER_AIO
from django.db import models
from django.conf import settings
from django.utils import timezone

# Create your models here.
class Post(models.Model):

    SYMPTOM_CHOICES = [
        ('PAIN', 'Pain'),
        ('FATIGUE', 'Fatigue')
    ]

    BOOLEAN_CHOICES = (
        ('Yes', 'Yes'),
        ('No', 'No'),
    )
    NUMERIC_CHOICES = [(i,i) for i in range(11)]

    category = models.CharField(max_length=100, choices=SYMPTOM_CHOICES)
    experienced_today = models.CharField(max_length=10, choices=BOOLEAN_CHOICES)
    severity = models.IntegerField(choices=NUMERIC_CHOICES, blank=True, default=0)
    sleep=models.DecimalField(max_digits=3, decimal_places=1, default=9)
    time = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='tracker_posts')

    objects = models.Manager() #default manager
    # userPostsObjects = UserPostObjects()
    class Meta:
        ordering = ('-time',)

        def __str__(self):
            if self.experienced_today is 'Yes':
                return 'On {self.time}, you experienced {self.category}, and the severity was {self.severity}.'
            else:
                return 'On {self.time}, You didn\'t experience {self.category}.'



