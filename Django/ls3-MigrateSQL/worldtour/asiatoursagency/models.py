from django.db import models

# Create your models here.

class Tour(models.Model):
    # we need a origin country, destination country, price, duration, description
    origin_country = models.CharField(max_length=100)
    destination_country = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.IntegerField()
    description = models.TextField()
    
    