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
} from '@mui/material';

export default function InstagramStoryDownloader() {
  const [url, setUrl] = useState('');
  const [preview, setPreview] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // API integration will go here
    setPreview('https://placeholder.com/story-preview.jpg');
    setDownloadUrl('https://placeholder.com/story.mp4');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
          Instagram Story Downloader
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
          <TextField
            fullWidth
            label="Instagram Story URL"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.instagram.com/stories/..."
            sx={{ mb: 2 }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            Download Story
          </Button>
        </Box>

        {preview && (
          <Card sx={{ maxWidth: 500, mx: 'auto' }}>
            <CardMedia
              component="img"
              height="300"
              image={preview}
              alt="Story preview"
            />
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="success"
                href={downloadUrl}
                download
              >
                Download Story
              </Button>
            </CardActions>
          </Card>
        )}
      </Box>
    </Container>
  );
}
