'use client';

import { useTranslation } from 'react-i18next';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  Close as CloseIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Check as CheckIcon,
} from '@mui/icons-material';
import { useThemeContext, colorPresets } from '@/theme/ThemeContext';

export default function SettingsDrawer({ open, onClose }) {
  const theme = useTheme();
  const { t } = useTranslation();
  const { mode, toggleTheme, colorPreset, changeColor } = useThemeContext();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 340,
          bgcolor: 'background.paper',
          borderRadius: 0.3,
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          py: 2,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
            {t('settings.title')}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.25 }}>
            Customize your experience
          </Typography>
        </Box>
        <IconButton 
          onClick={onClose} 
          size="small"
          sx={{ 
            color: 'text.secondary',
            '&:hover': { bgcolor: 'action.hover' }
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ p: 3, overflowY: 'auto', flex: 1 }}>
        {/* Mode Selection */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="overline"
            sx={{ 
              mb: 1.5, 
              display: 'block',
              fontWeight: 600, 
              color: 'text.secondary',
              letterSpacing: 1
            }}
          >
            {t('settings.mode')}
          </Typography>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={(e, newMode) => newMode && toggleTheme()}
            fullWidth
            sx={{
              bgcolor: 'action.hover',
              p: 0.5,
              borderRadius: 1.7,
              '& .MuiToggleButton-root': {
                py: 1,
                border: 'none',
                borderRadius: 1.5,
                gap: 1,
                fontWeight: 500,
                fontSize: '0.875rem',
                textTransform: 'none',
                '&.Mui-selected': {
                  bgcolor: 'background.paper',
                  color: 'text.primary',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  '&:hover': {
                    bgcolor: 'background.paper',
                  },
                },
                '&:hover': {
                  bgcolor: 'transparent',
                },
              },
            }}
          >
            <ToggleButton value="light">
              <LightModeIcon fontSize="small" />
              {t('settings.light')}
            </ToggleButton>
            <ToggleButton value="dark">
              <DarkModeIcon fontSize="small" />
              {t('settings.dark')}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Color Presets */}
        <Box>
          <Typography
            variant="overline"
            sx={{ 
              mb: 1.5, 
              display: 'block',
              fontWeight: 600, 
              color: 'text.secondary',
              letterSpacing: 1
            }}
          >
            {t('settings.primaryColor')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'space-between',
            }}
          >
            {Object.entries(colorPresets).map(([key, preset]) => {
              const isSelected = colorPreset === key;
              const colorValue = mode === 'light' ? preset.light.main : preset.dark.main;

              return (
                <Tooltip key={key} title={preset.name} arrow placement="top">
                  <Box
                    onClick={() => changeColor(key)}
                    sx={{
                      width: 52,
                      height: 36,
                      borderRadius: 1.5,
                      bgcolor: colorValue,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.15s ease',
                      outline: isSelected ? `2px solid ${colorValue}` : 'none',
                      outlineOffset: 2,
                      '&:hover': {
                        opacity: 0.85,
                      },
                    }}
                  >
                    {isSelected && (
                      <CheckIcon sx={{ color: '#fff', fontSize: 16 }} />
                    )}
                  </Box>
                </Tooltip>
              );
            })}
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

       
      </Box>
    </Drawer>
  );
}
