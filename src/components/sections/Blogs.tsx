import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Stack,
  Fade,
  Zoom,
} from '@mui/material';
import {
  MenuBook as MenuBookIcon,
  ArrowForward as ArrowForwardIcon,
  CalendarMonth as CalendarMonthIcon,
} from '@mui/icons-material';
import SectionTitle from '../SectionTitle';
import type { BlogPost } from '../../types/index';


interface BlogProps {
  posts: BlogPost[];
}

const Blogs: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return { day, month };
  };

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
        <SectionTitle
          title="Blog"
          icon={<MenuBookIcon sx={{ fontSize: 32 }} />}
        />

        {posts.length === 0 ? (
          <Fade in timeout={600}>
            <Box sx={{ textAlign: 'center', py: 12 }}>
              <Typography
                variant="h6"
                sx={{ color: '#9ca3af', fontSize: '1.125rem' }}
              >
                No blog posts available yet.
              </Typography>
            </Box>
          </Fade>
        ) : (
          <Grid container spacing={4}>
            {posts.map((post, index) => {
              const { day, month } = formatDate(post.date);

              return (
                <Grid item xs={12} md={6} key={post.id}>
                  <Zoom in timeout={500 + index * 100}>
                    <Card
                      sx={{
                        bgcolor: '#1a1d23',
                        border: '1px solid #2a2e38',
                        borderRadius: 4,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          borderColor: '#06b6d4',
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 32px rgba(6, 182, 212, 0.15)',
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            zIndex: 2,
                            bgcolor: '#f97316',
                            borderRadius: 3,
                            p: 1.5,
                            minWidth: 70,
                            textAlign: 'center',
                            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)',
                          }}
                        >
                          <Typography
                            sx={{
                              color: 'white',
                              fontSize: '1.5rem',
                              fontWeight: 700,
                              lineHeight: 1,
                              mb: 0.5,
                            }}
                          >
                            {day}
                          </Typography>
                          <Typography
                            sx={{
                              color: 'white',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                            }}
                          >
                            {month}
                          </Typography>
                        </Box>

                        {/* Post Image */}
                        <CardMedia
                          component="img"
                          height="280"
                          image={post.image}
                          alt={post.title}
                          sx={{
                            objectFit: 'cover',
                            opacity: 0.85,
                            transition: 'opacity 0.3s ease',
                            '&:hover': {
                              opacity: 1,
                            },
                          }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />

                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(to top, rgba(15, 17, 21, 0.9), transparent)',
                            p: 2,
                            display: 'flex',
                            gap: 1.5,
                            justifyContent: 'center',
                          }}
                        >
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                width: 48,
                                height: 48,
                                bgcolor: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Typography
                                sx={{
                                  color: 'white',
                                  fontWeight: 700,
                                  fontSize: '0.625rem',
                                }}
                              >
                                {tag.substring(0, 3).toUpperCase()}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: 'white',
                            fontWeight: 700,
                            mb: 2,
                            fontSize: '1.25rem',
                            lineHeight: 1.4,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: '#06b6d4',
                            },
                          }}
                        >
                          {post.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: '#9ca3af',
                            mb: 3,
                            lineHeight: 1.6,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {post.excerpt}
                        </Typography>

                        {/* Tags */}
                        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                          {post.tags.map((tag, idx) => (
                            <Chip
                              key={idx}
                              label={tag}
                              size="small"
                              sx={{
                                bgcolor: '#23272f',
                                color: '#06b6d4',
                                border: '1px solid #2a2e38',
                                fontSize: '0.75rem',
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Stack>

                        <Box sx={{ mt: 'auto' }}>
                          <Button
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                              color: '#06b6d4',
                              fontWeight: 600,
                              textTransform: 'none',
                              fontSize: '0.9375rem',
                              '&:hover': {
                                bgcolor: 'rgba(6, 182, 212, 0.08)',
                                '& .MuiSvgIcon-root': {
                                  transform: 'translateX(4px)',
                                },
                              },
                              '& .MuiSvgIcon-root': {
                                transition: 'transform 0.3s ease',
                              },
                            }}
                          >
                            Read More
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Blogs;