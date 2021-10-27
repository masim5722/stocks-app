from rest_framework import serializers
from .models import Stock


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['symbol', 'high', 'low', 'open', 'close', 'date']


class StockSymbolsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['symbol']