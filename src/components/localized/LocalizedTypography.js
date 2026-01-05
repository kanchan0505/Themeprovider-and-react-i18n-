'use client';

import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

/**
 * LocalizedTypography - A reusable Typography component with built-in i18n support
 * 
 * @param {string} id - Translation key from your locale JSON files
 * @param {string} variant - MUI Typography variant (h1, h2, body1, etc.)
 * @param {object} values - Optional interpolation values for dynamic translations
 * @param {string} fallback - Optional fallback text if translation key is not found
 * @param {string} ns - Optional namespace for translation (defaults to 'common')
 * @param {object} props - All other MUI Typography props (sx, color, etc.)
 * 
 * Usage:
 * <LocalizedTypography id="welcome.title" variant="h1" />
 * <LocalizedTypography id="greeting" variant="body1" values={{ name: 'John' }} />
 * <LocalizedTypography id="settings.title" variant="h6" sx={{ fontWeight: 600 }} />
 */
const LocalizedTypography = ({ 
  id, 
  variant = 'body1', 
  values, 
  fallback,
  ns = 'common',
  children,
  ...props 
}) => {
  const { t } = useTranslation(ns);
  
  // If children are provided, render them directly (for mixed content)
  if (children) {
    return (
      <Typography variant={variant} {...props}>
        {children}
      </Typography>
    );
  }
  
  // Get translated text with optional interpolation values
  const translatedText = t(id, { 
    defaultValue: fallback || id,
    ...values 
  });
  
  return (
    <Typography variant={variant} {...props}>
      {translatedText}
    </Typography>
  );
};

export default LocalizedTypography;
