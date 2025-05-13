import { Container, Box, Typography, Grid } from '@mui/material';

export default function HomeAppliancesStore() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
          Home Appliances Store
        </Typography>
        <Grid container spacing={3}>
          {/* Appliances grid will go here */}
        </Grid>
      </Box>
    </Container>
  );
}
