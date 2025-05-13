"use client";

import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Button, Rating } from '@mui/material';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Soft Baby Blanket',
    price: '$24.99',
    rating: 4.5,
    image: 'https://placehold.co/400x300/FF8E8E/FFFFFF/webp?text=Baby+Blanket',
  },
  {
    id: 2,
    name: 'Organic Cotton Onesie',
    price: '$19.99',
    rating: 5,
    image: 'https://placehold.co/400x300/4ECDC4/FFFFFF/webp?text=Baby+Onesie',
  },
  {
    id: 3,
    name: 'Baby Care Kit',
    price: '$34.99',
    rating: 4.8,
    image: 'https://placehold.co/400x300/FFD93D/FFFFFF/webp?text=Care+Kit',
  },
  {
    id: 4,
    name: 'Musical Mobile',
    price: '$29.99',
    rating: 4.7,
    image: 'https://placehold.co/400x300/6C5CE7/FFFFFF/webp?text=Musical+Mobile',
  },
];

export default function BabyProductsStore() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Box sx={{ position: 'relative', width: 200, height: 200, margin: 'auto' }}>
          <Image
            src="https://placehold.co/200x200/FF6B6B/FFFFFF/webp?text=👋"
            alt="Baby waving"
            width={200}
            height={200}
            style={{ borderRadius: '50%' }}
          />
        </Box>
        
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            mt: 4, 
            mb: 1,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Baby Products Store
        </Typography>
        
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ mb: 6 }}
        >
          Quality products for your little ones
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height={200}
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {product.price}
                  </Typography>
                  <Rating value={product.rating} precision={0.5} readOnly />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Add to Cart
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
