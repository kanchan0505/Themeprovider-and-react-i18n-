'use client';

import { useTranslation } from 'react-i18next';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
  Chip,
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  AvatarGroup,
  useTheme,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  MoreVert as MoreVertIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  AttachMoney as AttachMoneyIcon,
  Inventory as InventoryIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  LocalShipping as LocalShippingIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';

// Stat Card Component
function StatCard({ title, value, change, changeType, icon, color, vsText }) {
  const theme = useTheme();
  const isPositive = changeType === 'positive';

  return (
    <Card
      sx={{
        height: '100%',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: `${color}.main`,
              color: 'white',
              boxShadow: `0 8px 16px -4px ${theme.palette[color].main}50`,
            }}
          >
            {icon}
          </Box>
          <IconButton size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {isPositive ? (
            <TrendingUpIcon sx={{ fontSize: 18, color: 'success.main' }} />
          ) : (
            <TrendingDownIcon sx={{ fontSize: 18, color: 'error.main' }} />
          )}
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: isPositive ? 'success.main' : 'error.main',
            }}
          >
            {change}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {vsText}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

// Chart Placeholder Card
function ChartCard({ title, subtitle, weekText, monthText, yearText, months }) {
  const theme = useTheme();

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button size="small" variant="outlined" sx={{ minWidth: 'auto', px: 2 }}>
              {weekText}
            </Button>
            <Button size="small" variant="contained" sx={{ minWidth: 'auto', px: 2 }}>
              {monthText}
            </Button>
            <Button size="small" variant="outlined" sx={{ minWidth: 'auto', px: 2 }}>
              {yearText}
            </Button>
          </Box>
        </Box>

        {/* Chart Bars */}
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 200, mt: 2 }}>
          {[65, 45, 75, 50, 80, 60, 70, 55, 85, 45, 70, 90].map((height, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                height: `${height}%`,
                borderRadius: 1,
                background:
                  index === 11
                    ? `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
                    : theme.palette.mode === 'light'
                    ? 'rgba(99, 102, 241, 0.2)'
                    : 'rgba(129, 140, 248, 0.2)',
                transition: 'all 0.3s',
                '&:hover': {
                  background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                },
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          {months.map((month) => (
            <Typography key={month} variant="caption" color="text.secondary">
              {month}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}







// Main Dashboard Content
export default function DashboardContent() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          {t('dashboard.welcome', { name: 'Kabeer' })}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('dashboard.subtitle')}
        </Typography>
      </Box>

      {/* Stats Grid */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title={t('dashboard.totalRevenue')}
            value="$54,239"
            change={12.5}
            changeType="positive"
            icon={<AttachMoneyIcon />}
            color="primary"
            vsText={t('dashboard.vsLastMonth')}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title={t('dashboard.totalOrders')}
            value="1,429"
            change={8.2}
            changeType="positive"
            icon={<ShoppingCartIcon />}
            color="success"
            vsText={t('dashboard.vsLastMonth')}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title={t('dashboard.totalCustomers')}
            value="3,842"
            change={5.7}
            changeType="positive"
            icon={<PeopleIcon />}
            color="info"
            vsText={t('dashboard.vsLastMonth')}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title={t('dashboard.totalProducts')}
            value="284"
            change={-2.4}
            changeType="negative"
            icon={<InventoryIcon />}
            color="warning"
            vsText={t('dashboard.vsLastMonth')}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
