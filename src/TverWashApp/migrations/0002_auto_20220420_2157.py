# Generated by Django 3.2.11 on 2022-04-20 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TverWashApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='call_back',
            options={'verbose_name': 'Заявки на звонок', 'verbose_name_plural': 'Заявки на звонок'},
        ),
        migrations.AlterModelOptions(
            name='gallery',
            options={'verbose_name': 'Галерея', 'verbose_name_plural': 'Галерея'},
        ),
        migrations.AlterModelOptions(
            name='services',
            options={'verbose_name': 'Услуги', 'verbose_name_plural': 'Услуги'},
        ),
        migrations.AlterModelOptions(
            name='sign_up',
            options={'verbose_name': 'Заявки на запись', 'verbose_name_plural': 'Заявки на запись'},
        ),
        migrations.AlterModelOptions(
            name='team',
            options={'verbose_name': 'Команда', 'verbose_name_plural': 'Команда'},
        ),
        migrations.AddField(
            model_name='team',
            name='number',
            field=models.IntegerField(null=True, verbose_name='Телефон'),
        ),
    ]