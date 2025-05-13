"use client";

import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardMedia,
  CardActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

export default function YoutubeVideoDownloader() {
  const [url, setUrl] = useState('');
  const [quality, setQuality] = useState('720p');
  const [preview, setPreview] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // API integration will go here
    setPreview('https://placeholder.com/youtube-preview.jpg');
    setDownloadUrl('https://placeholder.com/video.mp4');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
          YouTube Video Downloader
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
          <TextField
            fullWidth
            label="YouTube Video URL"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Video Quality</InputLabel>
            <Select
              value={quality}
              label="Video Quality"
              onChange={(e) => setQuality(e.target.value)}
            >
              <MenuItem value="1080p">1080p</MenuItem>
              <MenuItem value="720p">720p</MenuItem>
              <MenuItem value="480p">480p</MenuItem>
              <MenuItem value="360p">360p</MenuItem>
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            Download Video
          </Button>
        </Box>

        {preview && (
          <Card sx={{ maxWidth: 500, mx: 'auto' }}>
            <CardMedia
              component="img"
              height="300"
              image={preview}
              alt="Video preview"
            />
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="success"
                href={downloadUrl}
                download
              >
                Download Video ({quality})
              </Button>
            </CardActions>
          </Card>
        )}
      </Box>
    </Container>
  );
}
