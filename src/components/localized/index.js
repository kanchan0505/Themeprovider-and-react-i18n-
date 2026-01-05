// Localized Components - Easy import for i18n-enabled MUI components
export { default as LocalizedTypography } from './LocalizedTypography';
export { default as LocalizedButton } from './LocalizedButton';

/**
 * Usage Examples:
 * 
 * import { LocalizedTypography, LocalizedButton } from '@/components/localized';
 * 
 * // Simple translation
 * <LocalizedTypography id="home.title" variant="h1" />
 * 
 * // With interpolation values
 * <LocalizedTypography id="dashboard.welcome" variant="h4" values={{ name: 'John' }} />
 * 
 * // With MUI styling props
 * <LocalizedTypography 
 *   id="settings.title" 
 *   variant="h6" 
 *   sx={{ fontWeight: 600, color: 'primary.main' }} 
 * />
 * 
 * // Button with translation
 * <LocalizedButton 
 *   labelId="buttons.submit" 
 *   variant="contained" 
 *   color="primary"
 *   onClick={handleSubmit} 
 * />
 */
