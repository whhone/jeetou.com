from django.db import models


class Drama(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Video(models.Model):
    drama = models.ForeignKey(Drama, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Shot(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    text = models.CharField(max_length=100)
    order = models.IntegerField()
    view_count = models.IntegerField()
    hashcode = models.CharField(max_length=32, default='')

    def __str__(self):
        return self.get_image_url()

    def get_image_url(self):
        return "https://static.jeetou.com/p/{}/{}.jpg".format(self.video_id, self.hashcode)

    def get_next_shot_id(self):
        try:
            return Shot.objects.get(video_id=self.video_id, order=(self.order + 1)).id
        except Shot.DoesNotExist:
            return None

    def get_previous_shot_id(self):
        try:
            return Shot.objects.get(video_id=self.video_id, order=(self.order - 1)).id
        except Shot.DoesNotExist:
            return None

    def get_video_name(self):
        return self.video.name
