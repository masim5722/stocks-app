from django.db import models


# Create your models here.
class Stocks(models.Model):
    symbol = models.CharField(max_length=50)
    date = models.DateField()
    high = models.FloatField()
    low = models.FloatField()
    close = models.FloatField()

    def __str__(self):
        return self.title