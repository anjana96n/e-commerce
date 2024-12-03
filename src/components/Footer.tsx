import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        bottom: 0,
        left: 0, 
        right: 0, 
        textAlign: 'center', 
        padding: '1rem', 
        backgroundColor: '#f1f1f1' 
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Eco Shop. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer; 