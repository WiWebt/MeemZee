"use client";

import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { Box, Typography, TextField, Button, Card, CardContent, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PauseIcon from '@mui/icons-material/Pause';

const API_ENDPOINT = '/api/download';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

function isValidUrl(url: string) {
  return url.trim().match(/^https?:\/\/(?:www\.)?instagram\.com\/(?:p|reel)\/[\w-]+\/?/i) !== null;
}

interface DownloadResponse {
  video_url: string;
  audio_url: string;
  video_audio_url: string;
}

interface MediaPlayerProps {
  url: string;
  type: 'video' | 'audio';
  title: string;
}

function MediaPlayer({ url, type, title }: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause();
      } else {
        mediaRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = url;
    a.download = `instagram-${type}-${Date.now()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Card className="mb-4">
      <CardContent>
        <Typography variant="h6" className="mb-2">{title}</Typography>
        <Box className="relative">
          {type === 'video' ? (
            <video
              ref={mediaRef as React.RefObject<HTMLVideoElement>}
              src={url}
              className="w-full rounded-lg"
              controls
            />
          ) : (
            <audio
              ref={mediaRef as React.RefObject<HTMLAudioElement>}
              src={url}
              className="w-full"
              controls
            />
          )}
          <Box className="flex justify-between items-center mt-2">
            <IconButton onClick={handlePlayPause} color="primary">
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton onClick={handleDownload} color="primary">
              <DownloadIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function Page() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadUrls, setDownloadUrls] = useState<DownloadResponse | null>(null);
  const [error, setError] = useState('');

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError('');
    setDownloadUrls(null);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to download reel');
      }

      const data = await response.json();
      setDownloadUrls(data);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to download reel. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50/10 to-white">
      <div className="absolute inset-0 bg-pattern-light opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
      
      <div className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-base font-semibold leading-loose text-blue-600 py-1">
              Utility Tools
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-4xl font-bold leading-[1.2] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 sm:text-5xl py-2">
              Instagram Reel Downloader
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-gray-600">
              Download Instagram reels in high quality with options for video, audio, or combined formats.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="mx-auto mt-16 max-w-2xl"
          >
            <div className="enhanced-card relative overflow-hidden rounded-2xl p-8">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 group-hover:scale-150 transition-transform duration-500" />
              
              <Box component="form" onSubmit={handleSubmit} className="relative">
                <TextField
                  fullWidth
                  label="Instagram Reel URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={loading}
                  margin="normal"
                  error={!!url && !isValidUrl(url)}
                  helperText={url && !isValidUrl(url) ? 'Please enter a valid Instagram URL' : ''}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handlePaste} edge="end">
                          <ContentPasteIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className="bg-white rounded-lg"
                />

                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={loading || !url || !isValidUrl(url)}
                  className="mt-4 bg-gradient-to-r from-blue-600 to-blue-800 !text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                >
                  {loading ? <CircularProgress size={24} /> : 'Download Reel'}
                </Button>

                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-red-600 text-center"
                  >
                    {error}
                  </motion.div>
                )}
              </Box>
            </div>

            {downloadUrls && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleIn}
                className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {downloadUrls.video_url && (
                  <div className="enhanced-card relative overflow-hidden rounded-2xl p-6">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10" />
                    <MediaPlayer url={downloadUrls.video_url} type="video" title="Video Only" />
                  </div>
                )}
                {downloadUrls.audio_url && (
                  <div className="enhanced-card relative overflow-hidden rounded-2xl p-6">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 opacity-10" />
                    <MediaPlayer url={downloadUrls.audio_url} type="audio" title="Audio Only" />
                  </div>
                )}
                {downloadUrls.video_audio_url && (
                  <div className="enhanced-card relative overflow-hidden rounded-2xl p-6">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 opacity-10" />
                    <MediaPlayer url={downloadUrls.video_audio_url} type="video" title="Video with Audio" />
                  </div>
                )}
              </motion.div>
            )}
            {downloadUrls && (
              <Card className="mt-8">
                <CardContent>
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
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
