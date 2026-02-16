import React, { useState } from 'react';
import { Box, Container, Grid, Fade } from '@mui/material';
import Sidebar from './Sidebar';
import ProfileHeader from './Header';
import Resume from './sections/Resume';
import About from './sections/About'; 
import Blogs from './sections/Blogs';
import Contact from './sections/Contact';

const personalInfo = {
  name: "Sanjay Gehlot",
  title: "DevOps | SRE | Cloud Engineer",
  status: "working",
  email: "mail.com",
  location: "Mumbai, IND",
  cvUrl: "#",
  avatar: "/path-to-your-avatar.jpg",
  socialLinks: [
    {icon: '&', url: '/', label: '0'},
  ]
};

const Layout = () => {
  const [activeTab, setActiveTab] = useState('Resume');

  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return <About personalInfo={personalInfo} />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Box sx={{color: 'white', p: 4}}>Portfolio Component Here</Box>;
      case 'Blog':
        return <Blogs posts={[]} />;
      case 'Contact':
        return <Contact personalInfo={personalInfo} />;
      default:
        return <Resume />;
    }
  };

  return (
    <Box sx={{ bgcolor: '#0f1115', minHeight: '100vh', py: 4, px: { xs: 2, md: 4 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={1} lg={1} sx={{ position: 'sticky', top: 20, alignSelf: 'start' }}>
             <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </Grid>

          <Grid item xs={12} md={11} lg={11}>
            <Box sx={{ mb: 3 }}>
              <ProfileHeader profile={personalInfo} />
            </Box>
            
            <Fade in key={activeTab} timeout={500}>
              <Box sx={{ 
                bgcolor: '#1a1d23', 
                borderRadius: 4, 
                border: '1px solid #2a2e38',
                minHeight: '500px',
                overflow: 'hidden'
              }}>
                {renderContent()}
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Layout;