from django.urls import path
from .download import download
from .media import media_download

urlpatterns = [
    path('download', download, name='download'),
     path('media/<uuid:file_id>/', media_download, name='media_download'),
]
