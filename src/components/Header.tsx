import React from 'react';
import { Box, Typography, Stack, IconButton, Divider, Card, Avatar, Grid } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Language as LanguageIcon,
  EmailOutlined,
  LocationOnOutlined,
  DownloadOutlined,
  Flag,
} from '@mui/icons-material';

import { personalInfo } from '../data/portfolioData';

interface ProfileHeaderProps {
  personalInfo?: {
    name: string;
    title: string;
    avatar: string;
    email: string;
    location: string;
    cvUrl?: string;
    socialLinks: {
      icon: string;
      url: string;
    }[];
  };
}

const ProfileHeader: React.FC<ProfileHeaderProps> = () => {
  const name = personalInfo?.name || 'Aditya Pratama';
  const title = personalInfo?.title || 'DevOps | SRE | Cloud Engineer';
  const avatar = personalInfo?.avatar;
  const email = personalInfo?.email || 'aditya@adityacprtm.dev';
  const location = personalInfo?.location || 'Jakarta, ID';
  const cvUrl = personalInfo?.cvUrl || '#';
  const socialLinks = personalInfo?.socialLinks || [];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      facebook: FacebookIcon,
      twitter: TwitterIcon,
      instagram: InstagramIcon,
      linkedin: LinkedInIcon,
      github: GitHubIcon,
      portfolio: LanguageIcon,
    };
    return icons[iconName.toLowerCase()] || LanguageIcon;
  };

  return (
    <Box sx={{ display: 'flex', mt: '45px', justifyContent: 'center', width: '100%', px: 2 }}>
      <Card
        sx={{
          width: '100%',
          maxWidth: 1100,
          position: 'relative',
          overflow: 'visible',
          border: '1px solid #333',
          borderRadius: 5,
          
          bgcolor: '#23262b',       
          backgroundImage: 'none', 
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            px: { xs: 3, md: 3 },
            py: { xs: 9, md: 3.5 }, 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'center' },
            justifyContent: 'space-between',
          }}
        >
          
          <Box sx={{
            border: '10px solid #23262b',
            borderRadius: '30px'
          }}>
            <Box
            sx={{
              position: 'absolute',
              top: -45, 
              left: { xs: '50%', md: 45 },
              transform: { xs: 'translateX(-50%)', md: 'none' },
              width: 140,
              height: 140,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                backgroundColor: '#1d1e24',
                borderRadius: '40px', 
                boxShadow: '0 -10px 50px rgba(0,0,0,0.2)',
                zIndex: -1,
              }
            }}
          >
            <Avatar
              src={avatar}
              alt={name}
              sx={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                border: '4px solid #23262b', 
              }}
              imgProps={{ onError: (e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/120' }}
            />
          </Box>
          </Box>

          <Box sx={{ flex: 1, ml: { xs: 0, md: '170px' }, textAlign: { xs: 'center', md: 'left' }, width: '100%', mt: {xs:"30px", sm: "30px",md: 0},  p: { xs: "0px", sm: "0px", md: 0 }}}>
            <Typography variant="h4" sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, fontWeight: 900, color: 'white', letterSpacing: 0.5 }}>
              {name.split(' ')[0]} <Box component="span" sx={{ fontWeight: 300, color: 'white' }}>{name.split(' ').slice(1).join(' ')}</Box>
            </Typography>

            <Typography variant="body1" sx={{ mt: 0.5, mb: 2, color: '#9ca3af', fontSize: '0.9rem' }}>
              {title}
            </Typography>

            <Stack direction="row" spacing={1} justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mb: { xs: 0, md: 0 } }}>
              {socialLinks.length > 0 ? socialLinks.map((s, i) => {
                const Icon = getIcon(s.icon);
                return <IconButton key={i} href={s.url} size="small" sx={{ color: '#6b7280', '&:hover': { color: 'white' } }}><Icon fontSize="small" /></IconButton>
              }) : (
                [FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, GitHubIcon, Flag].map((Icon, i) => (
                  <IconButton key={i} size="small" sx={{ color: '#6b7280', '&:hover': { color: 'white' } }}><Icon fontSize="small" /></IconButton>
                ))
              )}
            </Stack>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, borderColor: 'rgba(255,255,255,0.08)', mx: 4 }} />
          <Divider orientation="horizontal" flexItem sx={{ display: { xs: 'block', md: 'none' }, borderColor: 'rgba(255,255,255,0.08)', width: '100%', my: 3 }} />

          <Grid container spacing={3} sx={{ maxWidth: { md: 450 }, width: '100%' }}>

            <Grid>
              <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 700, letterSpacing: 1, display: 'block', mb: 0.5, fontSize: '0.65rem' }}>EMAIL</Typography>
              <Stack direction="row" alignItems="center" spacing={1} component="a" href={`mailto:${email}`} sx={{ textDecoration: 'none', color: 'white', '&:hover': { color: '#60a5fa' } }}>
                <Typography variant="body2" noWrap sx={{ fontSize: '0.85rem', maxWidth: { xs: '140px', md: '100%' } }}>{email}</Typography>
                <EmailOutlined sx={{ fontSize: 14, color: '#9ca3af' }} />
              </Stack>
            </Grid>

            <Grid >
              <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 700, letterSpacing: 1, display: 'block', mb: 0.5, fontSize: '0.65rem' }}>CV</Typography>
              <Stack direction="row" alignItems="center" spacing={1} component="a" href={cvUrl} download sx={{ textDecoration: 'none', color: 'white', '&:hover': { color: '#60a5fa' } }}>
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>Download</Typography>
                <DownloadOutlined sx={{ fontSize: 14, color: '#9ca3af' }} />
              </Stack>
            </Grid>

            <Grid>
              <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 700, letterSpacing: 1, display: 'block', mb: 0.5, fontSize: '0.65rem' }}>LOCATION</Typography>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ color: 'white' }}>
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>{location}</Typography>
                <LocationOnOutlined sx={{ fontSize: 14, color: '#9ca3af' }} />
              </Stack>
            </Grid>

            <Grid>
              <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 700, letterSpacing: 1, display: 'block', mb: 0.5, fontSize: '0.65rem' }}>STATUS</Typography>
              <Box sx={{ fontSize: '0.85rem' }}>🍉</Box>
            </Grid>

          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default ProfileHeader;