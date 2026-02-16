import React from 'react';
import { Paper, Stack, Typography, Box } from '@mui/material';
import {
  PersonOutline,
  DescriptionOutlined,
  WorkOutline,
  BookOutlined,
  MailOutlined
} from '@mui/icons-material';

interface SidebarProps {
  activeSection: string;
  setSection: (section: string) => void;
}

const menuItems = [
  { id: 'about', icon: <PersonOutline />, label: 'About' },
  { id: 'resume', icon: <DescriptionOutlined />, label: 'Resume' },
  { id: 'portfolio', icon: <WorkOutline />, label: 'Portfolio' },
  { id: 'blog', icon: <BookOutlined />, label: 'Blog' },
  { id: 'contact', icon: <MailOutlined />, label: 'Contact' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setSection }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: '#23262b',
        borderRadius: 4,
        border: '1px solid rgba(255,255,255,0.08)',
        p: 2,
        overflow: 'visible', 
        position: 'sticky',
        top: '100px',
        zIndex: 100,
        maxHeight: '100vh'
      }}
    >
      <Stack spacing={3} alignItems="center">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Box
              key={item.id}
              onClick={() => {
                setSection(item.id)
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}
              sx={{
                borderRadius: 4,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: isActive ? 'primary.main' : 'transparent',
                color: isActive ? 'white' : 'text.secondary',
                transition: 'all 0.3s ease',
                width: 90,
                height: 90,
                '&:hover': {
                  bgcolor: isActive ? 'primary.main' : 'rgba(255,255,255,0.05)',
                  transform: 'translateY(-3px)',
                  color: 'white',
                },
                boxShadow: isActive ? '0 10px 20px rgba(59, 130, 246, 0.4)' : 'none',

                '& .MuiSvgIcon-root': {
                  fontSize: '2.5rem', 
                  mb: 1, 
                }
              }}
            >
              <Box>{item.icon}</Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.85rem', 
                  letterSpacing: '1px'
                }}
              >
                {item.label.toUpperCase()}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Paper >
  );
};

export default Sidebar;