from rest_framework import generics
from tracker.models import Post
from .serializers import PostSerializer

class PostList(generics.ListCreateAPIView):
        queryset= Post.objects.all()
        serializer_class = PostSerializer
        pass
class PostFullList(generics.RetrieveAPIView):
        queryset= Post.objects.all()
        serializer_class = PostSerializer
        pass

class PostDetail(generics.RetrieveDestroyAPIView):
        queryset= Post.objects.all()
        serializer_class = PostSerializer
        pass

