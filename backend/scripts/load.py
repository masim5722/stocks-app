# scripts/load.py
import csv

# https://django-extensions.readthedocs.io/en/latest/runscript.html

# python manage.py runscript load

from stocks.models import Stock


def run():
    print('Deleteing data from Stocks Table...')
    Stock.objects.all().delete()

    print('opening 15.csv...')
    first_file = open('data/15.csv')
    print('reading 15.csv...')
    reader1 = csv.reader(first_file)

    print('opening 16.csv...')
    second_file = open('data/16.csv')
    print('reading 16.csv...')
    reader2 = csv.reader(second_file)

    print('opening 17.csv...')
    third_file = open('data/17.csv')
    print('reading 17.csv...')
    reader3 = csv.reader(third_file)

    next(reader1)  # Advance past the header
    next(reader2)  # Advance past the header
    next(reader3)  # Advance past the header

    print('inserting data from 15.csv...')
    for row in reader1:
        symbol = row[0]
        high = row[3]
        low = row[4]
        close = row[5]
        opens = row[2]
        date = row[10]
        m = Stock(symbol=symbol, high=high, low=low, close=close, open=opens, date=date)
        m.save()

    print('inserting data from 16.csv...')
    for row in reader2:
        symbol = row[0]
        high = row[3]
        low = row[4]
        close = row[5]
        opens = row[2]
        date = row[10]
        m = Stock(symbol=symbol, high=high, low=low, close=close, open=opens, date=date)
        m.save()

    print('inserting data from 17.csv...')
    for row in reader3:
        symbol = row[0]
        high = row[3]
        low = row[4]
        opens = row[2]
        close = row[5]
        date = row[10]
        m = Stock(symbol=symbol, high=high, low=low, close=close, open=opens, date=date)
        m.save()

    print('Data inserted successfully!')
