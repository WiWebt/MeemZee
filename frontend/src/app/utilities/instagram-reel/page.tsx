"use client";

import { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Card, CardContent, Grid, CircularProgress } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

interface DownloadResponse {
  video_url: string;
  audio_url: string;
  video_audio_url: string;
}

export default function InstagramReelDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadUrls, setDownloadUrls] = useState<DownloadResponse | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setDownloadUrls(null);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'reel',
          source: 'instagram',
          quality: '720',
          url: url.trim(),
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error('Failed to fetch download URLs' + data);
      }

      setDownloadUrls(data as DownloadResponse);
    } catch (err) {
      console.error('Download error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const isValidUrl = (url: string) => {
    return url.trim().startsWith('https://www.instagram.com/');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
          Instagram Reel Downloader
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
          <TextField
            fullWidth
            label="Instagram Reel URL"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.instagram.com/reel/..."
            sx={{ mb: 2 }}
            disabled={loading}
            error={!!url && !isValidUrl(url)}
            helperText={url && !isValidUrl(url) ? 'Please enter a valid Instagram URL' : ''}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading || !isValidUrl(url)}
            sx={{ mb: 2, position: 'relative' }}
          >
            {loading ? (
              <>
                Processing...
                <CircularProgress 
                  size={24} 
                  sx={{ 
                    position: 'absolute',
                    right: 16,
                  }} 
                />
              </>
            ) : (
              'Download'
            )}
          </Button>
        </Box>

        {error && (
          <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
            {error}
          </Typography>
        )}

        {downloadUrls && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PlayArrowIcon /> Video Only
                  </Typography>
                  <Button
                    fullWidth
                    variant="outlined"
                    href={downloadUrls.video_url}
                    target="_blank"
                    startIcon={<DownloadIcon />}
                  >
                    Download Video
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MusicNoteIcon /> Audio Only
                  </Typography>
                  <Button
                    fullWidth
                    variant="outlined"
                    href={downloadUrls.audio_url}
                    target="_blank"
                    startIcon={<DownloadIcon />}
                  >
                    Download Audio
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <DownloadIcon /> Complete File
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    href={downloadUrls.video_audio_url}
                    target="_blank"
                    startIcon={<DownloadIcon />}
                  >
                    Download All
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
}
