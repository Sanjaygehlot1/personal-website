import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Fade, Stack, useMediaQuery } from '@mui/material';
import { theme } from './utils/theme'
import Sidebar from './components/Sidebar';
import ProfileHeader from './components/Header';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import GeometricSBackground from './components/GeometricS';


const About = () => <Box sx={{ p: 4, color: 'text.secondary' }}>About Content</Box>;
const Blog = () => <Box sx={{ p: 4, color: 'text.secondary' }}>Blog Content</Box>;

function App() {
  const [activeSection, setActiveSection] = useState('resume');
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const renderContent = () => {
    switch (activeSection) {
      case 'about': return <About />;
      case 'resume': return <Resume />;
      case 'portfolio': return <Portfolio />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      default: return <Resume />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GeometricSBackground />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: '#23262b', 
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 2, md: 6 }, px: { xs: 2, md: 4 } }}>
          <Box sx={{ flex: 1, height: "40%", width: '100%', mb: 4, pb: 0 }}>
            <ProfileHeader />
          </Box>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            alignItems="flex-start"
          >

            <Box
              sx={{
                width: { xs: '100%', md: 'auto' },
                minWidth: { md: '120px' },
                position: { md: 'sticky' },
                top: { md: 100 },
                zIndex: 10
              }}
            >
              <Sidebar activeSection={activeSection} setSection={setActiveSection} />
            </Box>

            <Box sx={{ flex: 1, width: '100%' }}>
              <Fade in key={activeSection} timeout={400}>
                <Box
                  sx={{
                    bgcolor: '#23262b',
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.08)',
                    minHeight: 500,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                  }}
                >
                  {renderContent()}
                </Box>
              </Fade>
            </Box>

          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;