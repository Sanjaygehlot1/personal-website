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

interface AboutProps {
  personalInfo: PersonalInfo;
}

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <CodeIcon sx={{ fontSize: 32 }} />,
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)',
    skills: 'frontend',
  },
  {
    title: 'Backend Development',
    icon: <StorageIcon sx={{ fontSize: 32 }} />,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    skills: 'backend',
  },
  {
    title: 'DevOps & CI/CD',
    icon: <BuildIcon sx={{ fontSize: 32 }} />,
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
    skills: 'devops',
  },
  {
    title: 'Cloud Platforms',
    icon: <CloudIcon sx={{ fontSize: 32 }} />,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    skills: 'cloud',
  },
];

const services = [
  {
    icon: <BrushIcon sx={{ fontSize: 40 }} />,
    title: 'Full Stack Development',
    description: 'Building responsive and scalable web applications from frontend to backend',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)',
  },
  {
    icon: <RocketIcon sx={{ fontSize: 40 }} />,
    title: 'DevOps Engineering',
    description: 'Automating deployments and managing CI/CD pipelines',
    gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
  },
  {
    icon: <ArchitectureIcon sx={{ fontSize: 40 }} />,
    title: 'Cloud Architecture',
    description: 'Designing and implementing cloud-native solutions',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
  },
];

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0f1115',
        py: 8,
        px: { xs: 2, sm: 4 },
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle title="About Me" />

        {/* Bio Section */}
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
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              A passionate and skilled DevOps, SRE, and Cloud Engineer with a strong background in infrastructure provisioning,
              automation, and monitoring. I have completed and been certified by Google Cloud for Associate Cloud Engineer and AWS
              for AWS Certified Cloud Practitioner.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#9ca3af',
                lineHeight: 1.9,
                fontSize: '1rem',
                fontWeight: 300,
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and
              ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on AWS and GCP,
              as well as maintaining high availability with Kubernetes-based container cluster. Successfully implemented monitoring and
              logging tools like ELK, Grafana, and Datadog to ensure comprehensive visibility into system performance and implemented
              GitOps for managing infrastructure as code. My expertise also includes integrating automation testing into the CI/CD
              pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort.
            </Typography>
          </Box>
        </Fade>

        {/* Skills Section */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={category.title}>
              <Zoom in timeout={600 + index * 100}>
                <Card
                  sx={{
                    bgcolor: '#1a1d23',
                    border: '1px solid #2a2e38',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: category.color,
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 24px ${category.color}20`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          background: category.gradient,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          boxShadow: `0 4px 12px ${category.color}40`,
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1.125rem',
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Stack>

                    <Stack direction="row" flexWrap="wrap" gap={1.5}>
                      {skillsData[category.skills as keyof typeof skillsData].map((skill: string) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            bgcolor: '#23272f',
                            color: category.color,
                            border: '1px solid #2a2e38',
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                            '&:hover': {
                              bgcolor: `${category.color}15`,
                              borderColor: category.color,
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* What I Do Section */}
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

            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} md={4} key={service.title}>
                  <Zoom in timeout={800 + index * 150}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          background: service.gradient,
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2.5,
                          color: 'white',
                          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                        }}
                      >
                        {service.icon}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          mb: 1.5,
                          fontSize: '1.0625rem',
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: '#9ca3af',
                          lineHeight: 1.6,
                          fontSize: '0.875rem',
                          fontWeight: 300,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Fade>
      </Container>
    </Box>
  );
};

export default About;