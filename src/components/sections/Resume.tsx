import React from 'react';
import { Box, Typography, Stack, Grid } from '@mui/material';
import { BusinessCenter, School } from '@mui/icons-material';

const TimelineItem = ({ title, company, date, desc }: any) => (
  <Box sx={{ position: 'relative', pl: 4.5, pb: 4, '&:last-child': { pb: 0 } }}>
    {/* Continuous Line */}
    <Box sx={{ 
      position: 'absolute', 
      left: 0, 
      top: 6, 
      bottom: 0, 
      width: '1px', 
      bgcolor: '#333',
      // Hide line for last item to look cleaner if desired
    }} />
    
    {/* Glowing Dot */}
    <Box sx={{ 
      position: 'absolute', 
      left: -5.5, 
      top: 6, 
      width: 12, 
      height: 12, 
      borderRadius: '50%', 
      bgcolor: 'primary.main',
      boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.15)',
      zIndex: 2
    }} />

    <Typography variant="h6" sx={{ color: 'white', fontSize: '1.1rem', mb: 0.5 }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
      {company} <Box component="span" sx={{ color: 'primary.main', mx: 0.5 }}>•</Box> {date}
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
      {desc}
    </Typography>
  </Box>
);

const SectionHeader = ({ icon, title }: any) => (
  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
    <Box sx={{ 
      p: 1.5, 
      bgcolor: '#252525', 
      borderRadius: 3, 
      color: 'primary.main',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {icon}
    </Box>
    <Typography variant="h5">{title}</Typography>
  </Stack>
);

const Resume = () => {
  return (
    <Box sx={{ p: { xs: 3, md: 5 } }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ mb: 1.5 }}>Resume</Typography>
        <Box sx={{ width: 50, height: 5, bgcolor: 'primary.main', borderRadius: 2 }} />
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <SectionHeader icon={<BusinessCenter />} title="Experience" />
          <Box sx={{ mt: 2 }}>
            <TimelineItem 
              title="Senior DevOps Engineer"
              company="Gramedia"
              date="May 2024 - Present"
              desc="Enhanced system availability and performance by developing a Static Management System utilizing Cache and CDN."
            />
            <TimelineItem 
              title="Cloud Engineer"
              company="Tech Solutions"
              date="2022 - 2024"
              desc="Managed AWS infrastructure and automated CI/CD pipelines using Jenkins and GitHub Actions."
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <SectionHeader icon={<School />} title="Education" />
          <Box sx={{ mt: 2 }}>
            <TimelineItem 
              title="University of Brawijaya"
              company="Computer Science"
              date="2015 - 2020"
              desc="Specialized in Network Engineering and Cloud Infrastructure."
            />
             <TimelineItem 
              title="Digital Talent Scholarship"
              company="Kominfo"
              date="2019"
              desc="Completed intense training on Cloud Computing and Cybersecurity."
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;