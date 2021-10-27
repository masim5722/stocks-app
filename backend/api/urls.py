from django.contrib import admin
from django.urls import path, include

from stocks import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/stocks/list/', views.StockList.as_view()),
    path('api/stocks/symbols/', views.StockSymbols.as_view())
]
