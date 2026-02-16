import React from 'react';
import { Box } from '@mui/material';

const GeometricSBackground: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        bgcolor: '#1d1e24', 
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          left: -50,
          width: 600,
          height: 800,
          opacity: 1, 
        }}
      >
        
        <Box sx={{ position: 'absolute', top: 80, left: 150, display: 'flex' }}>
          <Box sx={{ width: 80, height: 60, bgcolor: '#06b6d4' }} />
          <Box sx={{ width: 80, height: 60, bgcolor: '#3b82f6' }} />
          <Box sx={{ width: 80, height: 60, bgcolor: '#f97316' }} />
          <Box sx={{ width: 80, height: 60, bgcolor: '#fbbf24' }} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 80,
            right: -80,
            width: 0,
            height: 0,
            borderTop: '120px solid transparent',
            borderRight: '120px solid #06b6d4',
            borderBottom: '120px solid transparent',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 60,
            left: 50,
            width: 0,
            height: 0,
            borderTop: '100px solid transparent',
            borderLeft: '100px solid #f97316',
            borderBottom: '100px solid transparent',
          }}
        />

        <Box sx={{ position: 'absolute', top: 200, left: 250, display: 'flex' }}>
          <Box sx={{ width: 70, height: 50, bgcolor: '#8b5cf6' }} />
          <Box sx={{ width: 70, height: 50, bgcolor: '#06b6d4' }} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 250,
            left: 200,
            width: 0,
            height: 0,
            borderBottom: '80px solid #3b82f6',
            borderLeft: '80px solid transparent',
            borderRight: '80px solid transparent',
          }}
        />

        <Box sx={{ position: 'absolute', top: 340, left: 180, display: 'flex' }}>
          <Box sx={{ width: 60, height: 50, bgcolor: '#10b981' }} />
          <Box sx={{ width: 60, height: 50, bgcolor: '#f97316' }} />
          <Box sx={{ width: 60, height: 50, bgcolor: '#06b6d4' }} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 340,
            left: 80,
            width: 0,
            height: 0,
            borderTop: '100px solid transparent',
            borderLeft: '100px solid #8b5cf6',
            borderBottom: '100px solid transparent',
          }}
        />

        <Box sx={{ position: 'absolute', top: 480, left: 150, display: 'flex' }}>
          <Box sx={{ width: 75, height: 55, bgcolor: '#fbbf24' }} />
          <Box sx={{ width: 75, height: 55, bgcolor: '#3b82f6' }} />
          <Box sx={{ width: 75, height: 55, bgcolor: '#10b981' }} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 560,
            left: 200,
            width: 0,
            height: 0,
            borderTop: '90px solid transparent',
            borderRight: '90px solid #f97316',
            borderBottom: '90px solid transparent',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 600,
            left: 50,
            width: 0,
            height: 0,
            borderBottom: '120px solid transparent',
            borderLeft: '120px solid #06b6d4',
            borderTop: '120px solid transparent',
          }}
        />

        <Box sx={{ position: 'absolute', top: 650, left: 170, display: 'flex' }}>
          <Box sx={{ width: 80, height: 60, bgcolor: '#06b6d4' }} />
          <Box sx={{ width: 80, height: 60, bgcolor: '#8b5cf6' }} />
          <Box sx={{ width: 80, height: 60, bgcolor: '#f97316' }} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 420,
            right: 80,
            width: 0,
            height: 0,
            borderTop: '60px solid transparent',
            borderRight: '60px solid #10b981',
            borderBottom: '60px solid transparent',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 180,
            left: 100,
            width: 0,
            height: 0,
            borderBottom: '70px solid #fbbf24',
            borderLeft: '70px solid transparent',
            borderRight: '70px solid transparent',
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 150,
          right: 200,
          width: 0,
          height: 0,
          borderTop: '40px solid transparent',
          borderRight: '40px solid #3b82f6',
          borderBottom: '40px solid transparent',
          opacity: 1,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 200,
          right: 150,
          width: 0,
          height: 0,
          borderBottom: '50px solid transparent',
          borderLeft: '50px solid #f97316',
          borderTop: '50px solid transparent',
          opacity: 1,
        }}
      />
    </Box>
  );
};

export default GeometricSBackground;