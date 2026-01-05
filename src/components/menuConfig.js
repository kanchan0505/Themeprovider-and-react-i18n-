import { 
  IconHome,
  IconDashboard,
  IconDatabase,
  IconSettings,
  IconUsers,
  IconFileText,
  IconChartBar,
} from '@tabler/icons-react';

// action/subject used for CASL check (ability.can(action, subject))
// labelKey is used for i18n translation
export const menuItems = [
  { 
    labelKey: 'sidebar.home', 
    icon: <IconHome size={20} />, 
    path: '/', 
    action: 'read', 
    subject: 'Home' 
  },
  { 
    labelKey: 'sidebar.dashboard', 
    icon: <IconDashboard size={20} />, 
    path: '/dashboard', 
    action: 'read', 
    subject: 'Dashboard' 
  },
  {
    labelKey: 'sidebar.masters',
    icon: <IconDatabase size={20} />,
    action: 'read',
    subject: 'Masters',
    children: [
      { 
        labelKey: 'sidebar.userManagement', 
        path: '/masters/user-management', 
        icon: <IconUsers size={16} />, 
        action: 'manage', 
        subject: 'User' 
      },
    ]
  },
  {
    labelKey: 'sidebar.reports',
    icon: <IconChartBar size={20} />,
    action: 'read',
    subject: 'Reports',
    children: [
      { 
        labelKey: 'sidebar.analytics', 
        path: '/reports/analytics', 
        icon: <IconFileText size={16} />, 
        action: 'read', 
        subject: 'Reports' 
      },
    ]
  },
  {
    labelKey: 'sidebar.administration', 
    icon: <IconSettings size={20} />, 
    action: 'manage', 
    subject: 'all',
    children: [
      { 
        labelKey: 'sidebar.settings', 
        path: '/settings', 
        icon: <IconSettings size={18} />, 
        action: 'manage', 
        subject: 'all' 
      },
    ]
  }
];
