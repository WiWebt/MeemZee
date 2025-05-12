import os
import uuid
import time
from django.http import FileResponse, Http404
from django.conf import settings

# In-memory store for file timestamps (for production use DB or cache)
TEMP_FILES = {}  # Example: {file_id: {'path': ..., 'created_at': ...}}

EXPIRY_SECONDS = 300  # 5 minutes

def register_temp_file(file_path, request=None):
    file_id = uuid.uuid4()
    TEMP_FILES[file_id] = {
        'path': file_path,
        'created_at': time.time()
    }

    if request:
        main_server_url = request.build_absolute_uri('/')  # This gets the base URL of the request
        return f'{main_server_url}utilities/media/{file_id}', file_id

    return "", file_id

def media_download(request, file_id):
    try:
        file_info = TEMP_FILES.get(uuid.UUID(str(file_id)))
        if not file_info:
            raise Http404("File not found or expired")

        # Check if file expired
        if time.time() - file_info['created_at'] > EXPIRY_SECONDS:
            # Delete file and cleanup
            os.remove(file_info['path'])
            del TEMP_FILES[file_id]
            raise Http404("Link expired")

        return FileResponse(open(file_info['path'], 'rb'), as_attachment=True)

    except Exception:
        raise Http404("Invalid or expired link")
