from django.conf.urls import url, include
from rest_framework import routers

from jeetou.api import DramaViewSet, VideoViewSet, ShotViewSet, ShotSearchView
from . import views

app_name = 'jeetou'

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'dramas', DramaViewSet)
router.register(r'videos', VideoViewSet)
router.register(r'shots', ShotViewSet)

urlpatterns = [
    url(r'^api/search/', ShotSearchView.as_view()),
    url(r'^api/', include(router.urls)),
    url(r'^', views.index, name='react'),
]
