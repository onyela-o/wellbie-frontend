from rest_framework import serializers
from tracker.models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ( 'id', 'category', 'experienced_today', 'severity', 'time', 'author' )

