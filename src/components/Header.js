// src/components/Header.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      padding: 2,
      backgroundColor: '#026596',
      color: '#ffffff',
    }}
  >
    <img
      src="https://hochschulkontaktmesse.com/wp-content/uploads/2024/09/Motto-Logo-final.png"
      alt="HOKO 2024 Logo"
      style={{ height: 60, marginRight: 16 }}
    />
    <Typography variant="h4">Monitoring HOKO 2024</Typography>
  </Box>
);

export default Header;
