import json
import os
from django.http import JsonResponse
import yt_dlp
import moviepy.editor as mp
import requests,tempfile
from .media import register_temp_file, media_download
import random
import string
import traceback

def download(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        if data.get('type') != 'reel' or data.get('source') != 'instagram':
            return JsonResponse({'error': 'Invalid type or source'}, status=400)

        url = data.get('url')
        resolution = data.get('resolution', '720')

        if not url:
            return JsonResponse({'error': 'Missing URL'}, status=400)

        try:
            download_data = get_best_dash_url(url)            
            if download_data.get('error'):
                return JsonResponse({'error': download_data.get('error')}, status=500)
        
            # video_audio_url(download_data, request)

            return JsonResponse(download_data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'POST only'}, status=405)

def get_best_dash_url(video_url):
    ydl_opts = {
        'quiet': True,
        'skip_download': True,
        'cookiesfrombrowser': ('chrome',),  # Use Chrome cookies
        'cookiesfile': None,  # Will be created by yt-dlp
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(video_url, download=False)
        formats = info.get('formats', [])

        # Filter to get best video-only and best audio-only
        best_video = max(
            [f for f in formats if f.get('vcodec') != 'none' and f.get('acodec') == 'none'],
            key=lambda f: f.get('height', 0),
            default=None
        )
        best_audio = max(
            [f for f in formats if f.get('acodec') != 'none' and f.get('vcodec') == 'none'],
            key=lambda f: f.get('abr', 0),
            default=None
        )

        if best_video and best_audio:
            return {
                'video_url': best_video.get('url'),
                'video_format_id': best_video.get('format_id'),
                'audio_url': best_audio.get('url'),
                'audio_format_id': best_audio.get('format_id'),
            }

        return {
            'error': 'Could not find compatible video+audio streams.'
        }

def video_audio_url(download_data, request):
    video_file = download_to_temp(download_data.get('video_url'), 'video.mp4')
    audio_file = download_to_temp(download_data.get('audio_url'), 'audio.m4a')
    
    # Merge video and audio
    output_file = get_temp_file_path('output.mp4')
    merge_video_audio(video_file, audio_file, output_file)

    # Clean up temporary files
    os.remove(video_file)
    os.remove(audio_file)

    file_url, file_id = register_temp_file(output_file, request)
    download_data["video_audio_url"] = file_url

def download_to_temp(url, suffix=None):
    file_path = get_temp_file_path(suffix)

    # Download the file
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(file_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
        print(f"Downloaded to: {file_path}")
        return file_path
    else:
        raise Exception(f"Failed to download file: {url}, status code {response.status_code}")

def get_temp_file_path(suffix=None):
    temp_dir = tempfile.gettempdir()

    random_prefix = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
    filename = f"{random_prefix}_{suffix}"

    return os.path.join(temp_dir, filename)
   

def merge_video_audio(video_file, audio_file, output_file):
    video = mp.VideoFileClip(video_file)
    audio = mp.AudioFileClip(audio_file)
    video = video.set_audio(audio)
    
    try:
        video.write_videofile(output_file, codec='libx264', audio_codec='aac',verbose=False,logger=None)
    except Exception as e:
        traceback.print_exc()
        raise Exception(f"Failed to while mergin video_audio, Exception {e}")