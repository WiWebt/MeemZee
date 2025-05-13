"use client";

import { AppBar, Toolbar, Button, Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { title: 'Baby Products', path: '/baby-products' },
  { title: 'Home Appliances', path: '/home-appliances' },
  { title: 'Utilities', path: '/utilities' },
];

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <AppBar 
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <Image
                src="https://placehold.co/40x40/FF6B6B/FFFFFF/svg?text=M"
                alt="MeemZee Logo"
                width={40}
                height={40}
                style={{ borderRadius: '8px' }}
              />
              <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                MeemZee
              </Typography>
            </Link>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                href={item.path}
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'var(--accent)',
                    opacity: 0.9,
                  },
                  backgroundColor: pathname === item.path ? 'var(--secondary)' : 'transparent',
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
