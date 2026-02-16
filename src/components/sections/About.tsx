import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Fade,
  Zoom,
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Cloud as CloudIcon,
  Brush as BrushIcon,
  Rocket as RocketIcon,
  Architecture as ArchitectureIcon,
} from '@mui/icons-material';
import SectionTitle from '../SectionTitle';
import type { PersonalInfo } from '../../types';
import { skillsData } from '../../data/portfolioData';
import {About as aboutInfo} from '../../data/about'


const About: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        px: { xs: 2, sm: 4 },
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle title="ABOUT ME" />

        <Fade in timeout={800}>
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#9ca3af',
                lineHeight: 1.9,
                fontSize: '1rem',
                fontWeight: 300,
                mb: 3,
                maxWidth: '900px',
                mx: 'auto',
                whiteSpace: 'pre-wrap'
              }}
            >
              {aboutInfo}
            </Typography>
          </Box>
        </Fade>


        <Fade in timeout={1000}>
          <Card
            sx={{
              bgcolor: '#1a1d23',
              border: '1px solid #2a2e38',
              borderRadius: 4,
              p: 5,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 6,
                textAlign: 'center',
                fontSize: '1.75rem',
              }}
            >
              What I Do
            </Typography>

            
          </Card>
        </Fade>
      </Container>
    </Box>
  );
};

export default About;