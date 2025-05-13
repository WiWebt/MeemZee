import { Container, Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';

const utilities = [
  {
    title: 'Instagram Reel Downloader',
    description: 'Download Instagram reels easily',
    path: '/utilities/instagram-reel'
  },
  {
    title: 'Instagram Story Downloader',
    description: 'Save Instagram stories',
    path: '/utilities/instagram-story'
  },
  {
    title: 'YouTube Video Downloader',
    description: 'Download YouTube videos in various qualities',
    path: '/utilities/youtube-video'
  }
];

export default function UtilitiesPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
          Utilities
        </Typography>
        
        <Grid container spacing={3}>
          {utilities.map((utility) => (
            <Grid item xs={12} sm={6} md={4} key={utility.path}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {utility.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {utility.description}
                  </Typography>
                  <Button
                    component={Link}
                    href={utility.path}
                    variant="contained"
                    fullWidth
                  >
                    Open Tool
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
