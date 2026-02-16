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
        overflow: 'hidden',
      }}
    >
      <Stack spacing={2} alignItems="center">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Box
              key={item.id}
              onClick={() => setSection(item.id)}
              sx={{
                width: 100,
                height: 100,
                borderRadius: 3,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: isActive ? 'primary.main' : 'transparent',
                color: isActive ? 'white' : 'text.secondary',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: isActive ? 'primary.main' : 'rgba(255,255,255,0.05)',
                  transform: 'translateY(-2px)',
                },
                boxShadow: isActive ? '0 8px 16px rgba(59, 130, 246, 0.3)' : 'none',
              }}
            >
              <Box sx={{ mb: 0.5 }}>{item.icon}</Box>
              <Typography 
                variant="caption" 
                sx={{ 
                  fontWeight: 600, 
                  fontSize: '0.7rem',
                  letterSpacing: '0.5px' 
                }}
              >
                {item.label.toUpperCase()}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default Sidebar;