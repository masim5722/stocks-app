from rest_framework.generics import ListAPIView
from .models import Stock
from .serializers import StockSerializer
from django_filters import rest_framework as filters
from rest_framework.filters import OrderingFilter, SearchFilter


class StockList(ListAPIView):
    serializer_class = StockSerializer
    queryset = Stock.objects.all()
    filter_backends = (filters.DjangoFilterBackend, OrderingFilter)
    filterset_fields = ('symbol', 'date')
    ordering_fields = ('close', 'open', 'high', 'low')
