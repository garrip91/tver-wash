# Generated by Django 4.0.4 on 2022-04-23 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TverWashApp', '0004_alter_call_back_options_alter_gallery_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gallery',
            name='image',
            field=models.ImageField(upload_to='media/img/', verbose_name='Фото для галереи'),
        ),
        migrations.AlterField(
            model_name='services',
            name='image',
            field=models.ImageField(upload_to='media/img/', verbose_name='Фото'),
        ),
        migrations.AlterField(
            model_name='team',
            name='image',
            field=models.ImageField(upload_to='media/img/', verbose_name='Фото'),
        ),
    ]