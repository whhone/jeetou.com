from rest_framework import generics, serializers, viewsets

from jeetou.models import Shot, Video, Drama


class DramaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Drama
        fields = ('id', 'name')


class DramaViewSet(viewsets.ModelViewSet):
    queryset = Drama.objects.all()
    serializer_class = DramaSerializer


class VideoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Video
        fields = ('id', 'drama_id', 'name')


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


class ShotSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shot
        fields = ('id', 'video_id', 'order', 'text', 'get_image_url',
                  'get_next_shot_id', 'get_previous_shot_id', 'get_video_name')


class ShotViewSet(viewsets.ModelViewSet):
    queryset = Shot.objects.all()
    serializer_class = ShotSerializer


class ShotSearchView(generics.ListAPIView):
    """API for retrieving customized shot search results.

    1) Search for shots exactly contain the query.
    2) Search for shots which contain all the chars, not necessary to be consecutive, in the right order.
    """
    serializer_class = ShotSerializer

    def get_queryset(self):
        query = self.request.query_params.get('q', None)
        if query:
            queryset = Shot.objects.filter(text__icontains=query)
            query2 = "%"
            for char in query:
                query2 += char + "%"
            queryset2 = Shot.objects.extra(where=['text LIKE %s'], params=[query2])
            return queryset | queryset2
        else:
            return Shot.objects.all()
