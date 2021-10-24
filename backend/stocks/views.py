from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from .models import Stock
from .serializers import StockSerializer


@api_view(['GET'])
def stock_list(request):
    if request.method == 'GET':
        stocks = Stock.objects.order_by('close').all()
        serializer = StockSerializer(stocks, many=True)
        return JsonResponse(serializer.data, safe=False)
