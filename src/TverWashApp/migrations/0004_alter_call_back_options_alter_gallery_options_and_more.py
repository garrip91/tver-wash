# Generated by Django 4.0.4 on 2022-04-22 06:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TverWashApp', '0003_remove_call_back_number_remove_sign_up_number_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='call_back',
            options={'ordering': ['id'], 'verbose_name': 'Заявки на звонок', 'verbose_name_plural': 'Заявки на звонок'},
        ),
        migrations.AlterModelOptions(
            name='gallery',
            options={'ordering': ['id'], 'verbose_name': 'Галерея', 'verbose_name_plural': 'Галерея'},
        ),
        migrations.AlterModelOptions(
            name='services',
            options={'ordering': ['id'], 'verbose_name': 'Услуги', 'verbose_name_plural': 'Услуги'},
        ),
        migrations.AlterModelOptions(
            name='sign_up',
            options={'ordering': ['id'], 'verbose_name': 'Заявки на запись', 'verbose_name_plural': 'Заявки на запись'},
        ),
        migrations.AlterModelOptions(
            name='team',
            options={'ordering': ['id'], 'verbose_name': 'Команда', 'verbose_name_plural': 'Команда'},
        ),
    ]
