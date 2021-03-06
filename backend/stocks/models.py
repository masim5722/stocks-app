from django.contrib import admin
from django.db import models


# Stock Model
class Stock(models.Model):
    symbol = models.CharField(max_length=50)
    date = models.DateField()
    high = models.FloatField()
    low = models.FloatField()
    open = models.FloatField(default=0)
    close = models.FloatField()


class StockAdmin(admin.ModelAdmin):
    list_display = ('symbol', 'high', 'low', 'open', 'close', 'date')
