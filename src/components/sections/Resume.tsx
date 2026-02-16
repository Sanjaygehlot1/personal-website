import React from 'react';
import { Box, Typography, Stack, Grid, Chip, Fade } from '@mui/material';
import { BusinessCenter, School, Code, Terminal, EmojiEvents } from '@mui/icons-material';
import { resumeData } from '../../data/resumeData';
import SectionTitle from '../SectionTitle';
const TimelineItem = ({ title, company, date, desc }: {title: string, company:string, date:string, desc: string[]}) => (
  <Box sx={{ position: 'relative', pl: 4.5, pb: 4, '&:last-child': { pb: 0 } }}>
    {/* Continuous Line */}
    <Box sx={{ 
      position: 'absolute', 
      left: 0, 
      top: 6, 
      bottom: 0, 
      width: '1px', 
      bgcolor: '#333',
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
    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
      {company} <Box component="span" sx={{ color: 'primary.main', mx: 0.5 }}>•</Box> {date}
    </Typography>
    
    {/* Handle Description: Array for bullets, String for simple text */}
    <Box sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.9rem' }}>
      {Array.isArray(desc) ? (
        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
          {desc.map((point, index) => (
            <li key={index} style={{ marginBottom: '4px' }}>{point}</li>
          ))}
        </ul>
      ) : (
        desc
      )}
    </Box>
  </Box>
);

const SectionHeader = ({ icon, title }: {icon: any, title: string}) => (
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
     <span className='flex '>{icon}</span>
    </Box>
    <Typography variant="h5" fontWeight="bold">{title}</Typography>
  </Stack>
);

const SkillGroup = ({ title, skills }: {title: string, skills: string[]}) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="subtitle2" sx={{ color: 'primary.main', mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
      {title}
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {skills.map((skill, index) => (
        <Chip 
          key={index} 
          label={skill} 
          sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.05)', 
            color: 'text.secondary', 
            borderRadius: 1,
            '&:hover': { bgcolor: 'rgba(59, 130, 246, 0.15)', color: 'white' }
          }} 
        />
      ))}
    </Box>
  </Box>
);


const Resume = () => {
  return (
    <Box sx={{ p: { xs: 3, md: 5 } }}>
      <Box sx={{ mb: 5 }}>
       <SectionTitle title='Resume'/>
        
      </Box>
      <Fade in timeout={800}>
      <Grid container spacing={6}>
        <Grid>
          <SectionHeader icon={<BusinessCenter />} title="Experience" />
          <Box sx={{ mt: 2, mb: 6 }}>
            {resumeData.experience.map((item) => (
              <TimelineItem 
                key={item.id}
                title={item.title}
                company={item.company}
                date={item.date}
                desc={item.desc}
              />
            ))}
          </Box>
        </Grid>

        <Grid>
          <SectionHeader icon={<School />} title="Education" />
          <Box sx={{ mt: 2, mb: 6 }}>
            {resumeData.education.map((item) => (
              <TimelineItem 
                key={item.id}
                title={item.title}
                company={item.company}
                date={item.date}
                desc={item.desc}
              />
            ))}
          </Box>
          <SectionHeader icon={<Terminal width={16} height={16}/>} title="Technical Skills" />
          <Box sx={{ pl: 2, mb: 6 }}>
             <SkillGroup title="Languages" skills={resumeData.skills.languages} />
             <SkillGroup title="Cloud & DevOps" skills={resumeData.skills.cloud} />
             <SkillGroup title="DevSecOps" skills={resumeData.skills.devSecOps} />
             <SkillGroup title="Web Technologies" skills={resumeData.skills.web} />
             <SkillGroup title="Tools" skills={resumeData.skills.tools} />
          </Box>

          <SectionHeader icon={<EmojiEvents />} title="Achievements" />
          <Box sx={{ pl: 2 }}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#a1a1aa' }}>
               {resumeData.achievements.map((ach, index) => (
                 <li key={index} style={{ marginBottom: '8px' }}>
                   <Typography variant="body2">{ach}</Typography>
                 </li>
               ))}
            </ul>
          </Box>

        </Grid>
      </Grid>
      </Fade>
    </Box>
  );
};

export default Resume;