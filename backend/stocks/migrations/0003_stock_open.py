# Generated by Django 3.2.8 on 2021-10-26 05:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0002_rename_stocks_stock'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='open',
            field=models.FloatField(default=0),
        ),
    ]
