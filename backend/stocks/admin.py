from django.contrib import admin
from stocks.models import Stock, StockAdmin

# Register your models here.
admin.site.register(Stock, StockAdmin)
