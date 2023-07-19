# Generated by Django 4.2.2 on 2023-06-28 15:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('humanresource', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='password',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='employee',
            name='user',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='Employee', to=settings.AUTH_USER_MODEL),
        ),
    ]