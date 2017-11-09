# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-12 05:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Drama',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Shot',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=100)),
                ('order', models.IntegerField()),
                ('view_count', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('drama', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jeetou.Drama')),
            ],
        ),
        migrations.AddField(
            model_name='shot',
            name='video',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jeetou.Video'),
        ),
    ]
