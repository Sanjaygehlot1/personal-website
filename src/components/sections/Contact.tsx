import React from 'react';
import { Box, Typography, TextField, Button, Grid, Stack, Alert } from '@mui/material';
import { Send } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
        <Typography variant="h4">Contact</Typography>
        <Box sx={{ flex: 1, height: 2, bgcolor: '#3b82f6', borderRadius: 1, maxWidth: 100 }} />
      </Stack>

      <Box sx={{ height: 200, width: '100%', bgcolor: '#2d2d2d', borderRadius: 4, mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography color="text.secondary">Map / Location Visualization</Typography>
      </Box>

      <Typography variant="h6" sx={{ mb: 3 }}>
        Open for opportunities: <span style={{ color: '#3b82f6' }}>Yes</span>
      </Typography>

      <Box component="form" sx={{ bgcolor: '#262626', p: 4, borderRadius: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Full name" variant="outlined" 
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#1e1e1e' } }} 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email address" variant="outlined" 
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#1e1e1e' } }} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline rows={4} label="Your message" variant="outlined" 
               sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#1e1e1e' } }} 
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" size="large" startIcon={<Send />} sx={{ px: 4, py: 1.5, borderRadius: 2 }}>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;