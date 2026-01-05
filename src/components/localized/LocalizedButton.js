'use client';

import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

/**
 * LocalizedButton - A reusable Button component with built-in i18n support
 * 
 * @param {string} labelId - Translation key for button label
 * @param {object} values - Optional interpolation values for dynamic translations
 * @param {string} ns - Optional namespace for translation (defaults to 'common')
 * @param {object} props - All other MUI Button props (variant, color, onClick, etc.)
 * 
 * Usage:
 * <LocalizedButton labelId="buttons.submit" variant="contained" onClick={handleSubmit} />
 * <LocalizedButton labelId="buttons.cancel" variant="outlined" />
 */
const LocalizedButton = ({ 
  labelId, 
  values,
  ns = 'common',
  children,
  ...props 
}) => {
  const { t } = useTranslation(ns);
  
  // If children are provided, render them directly
  if (children) {
    return <Button {...props}>{children}</Button>;
  }
  
  return (
    <Button {...props}>
      {t(labelId, values)}
    </Button>
  );
};

export default LocalizedButton;
