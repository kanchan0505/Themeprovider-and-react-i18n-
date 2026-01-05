'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Grid,
  alpha,
  useTheme
} from '@mui/material';
import { 
  IconRocket, 
  IconDatabase, 
  IconShield, 
  IconCode,
  IconBolt,
  IconTrendingUp 
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Home() {
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation();

  const features = [
    {
      title: t('features.fastDev.title'),
      description: t('features.fastDev.description'),
      icon: <IconBolt size={40} />,
      color: theme.palette.warning.main
    },
    {
      title: t('features.secure.title'),
      description: t('features.secure.description'),
      icon: <IconShield size={40} />,
      color: theme.palette.success.main
    },
    {
      title: t('features.database.title'),
      description: t('features.database.description'),
      icon: <IconDatabase size={40} />,
      color: theme.palette.info.main
    },
    {
      title: t('features.modern.title'),
      description: t('features.modern.description'),
      icon: <IconCode size={40} />,
      color: theme.palette.secondary.main
    },
    {
      title: t('features.production.title'),
      description: t('features.production.description'),
      icon: <IconRocket size={40} />,
      color: theme.palette.primary.main
    },
    {
      title: t('features.performance.title'),
      description: t('features.performance.description'),
      icon: <IconTrendingUp size={40} />,
      color: theme.palette.error.main
    }
  ];

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t('home.title')}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              color: 'text.secondary',
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            {t('home.subtitle')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => router.push('/dashboard')}
              sx={{ 
                px: 4, 
                py: 1.5,
                 borderradius: 1.7,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}
            >
              {t('buttons.getStarted')}
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              onClick={() => router.push('/signup')}
              sx={{ 
                px: 4, 
                py: 1.5,
                 borderradius: 1.7,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}
            >
              {t('buttons.signUpFree')}
            </Button>
          </Box>
        </MotionBox>

        {/* Features Section */}
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                sx={{ 
                  height: '100%',
                    borderradius: 1.7,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: theme.shadows[8],
                    borderColor: feature.color
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                       borderradius: 1.7,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      bgcolor: alpha(feature.color, 0.1),
                      color: feature.color
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 1,
                      color: 'text.primary'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          sx={{ 
            mt: 8, 
            textAlign: 'center',
            p: 6,
              borderradius: 1.7,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
            border: `1px solid ${theme.palette.divider}`
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              color: 'text.primary'
            }}
          >
            {t('home.cta.title')}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3, 
              color: 'text.secondary',
              maxWidth: 500,
              mx: 'auto'
            }}
          >
            {t('home.cta.subtitle')}
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => router.push('/dashboard')}
            sx={{ 
              px: 5, 
              py: 1.5,
               borderradius: 1.7,
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
          >
            {t('buttons.explore')}
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
}

