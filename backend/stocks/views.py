from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from .models import Stock
from .serializers import StockSerializer
from django_filters import rest_framework as filters
from rest_framework.filters import OrderingFilter, SearchFilter


class CustomPagination(PageNumberPagination):
    page_size = 25
    page_size_query_param = 'page_size'


class StockList(ListAPIView):
    serializer_class = StockSerializer
    queryset = Stock.objects.all()
    filter_backends = (filters.DjangoFilterBackend, OrderingFilter)
    filterset_fields = ('symbol', 'date')
    ordering_fields = ('close', 'open', 'high', 'low')
    pagination_class = CustomPagination



