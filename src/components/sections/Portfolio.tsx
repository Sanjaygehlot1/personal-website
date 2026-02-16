import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Grid, Card, CardContent } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
const PortfolioCard = ({ title, category, image }: any) => (
  <Card
    sx={{
      height: '100%',
      bgcolor: 'transparent',
      boxShadow: 'none',
      cursor: 'pointer',
      '&:hover .image-box': { transform: 'scale(1.02)' },
      '&:hover .title': { color: 'primary.main' }
    }}
  >
    <Box
      className="image-box"
      sx={{
        height: 180,
        bgcolor: '#2d2d2d',
        borderRadius: 3,
        overflow: 'hidden',
        mb: 2,
        transition: 'transform 0.3s ease',
        position: 'relative'
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
      />
    </Box>
    <Box>
      <Typography variant="h6" className="title" sx={{ fontSize: '1rem', mb: 0.5, transition: 'color 0.2s' }}>
        {title}
      </Typography>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {category}
      </Typography>
    </Box>
  </Card>
);

const Portfolio = () => {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ p: { xs: 3, md: 5 } }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 1.5 }}>Portfolio</Typography>
        <Box sx={{ width: 50, height: 5, bgcolor: 'primary.main', borderRadius: 2 }} />
      </Box>

      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        sx={{
          mb: 4,
          '& .MuiTab-root': {
            color: 'text.secondary',
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            mr: 2
          },
          '& .Mui-selected': { color: 'primary.main' },
          '& .MuiTabs-indicator': { bgcolor: 'primary.main' }
        }}
      >
        <Tab label="All" />
        <Tab label="Certifications" />
        <Tab label="Projects" />
      </Tabs>

      <AnimatePresence mode="wait">
        <Grid container spacing={3}>
          <Grid>
            <PortfolioCard
              title="AWS Cloud Architecture"
              category="Certification"
              image="https://via.placeholder.com/400x300/1a1a1a/3b82f6?text=AWS"
            />
          </Grid>
          <Grid>
            <PortfolioCard
              title="Kubernetes Cluster Setup"
              category="Project"
              image="https://via.placeholder.com/400x300/1a1a1a/3b82f6?text=K8s"
            />
          </Grid>
          <Grid >
            <PortfolioCard
              title="High Availability Network"
              category="Project"
              image="https://via.placeholder.com/400x300/1a1a1a/3b82f6?text=Network"
            />
          </Grid>
        </Grid>
      </AnimatePresence>
    </Box>
  );
};

export default Portfolio;