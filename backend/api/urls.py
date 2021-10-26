from django.contrib import admin
from django.urls import path, include

from stocks import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/stocks/', views.StockList.as_view())
]
