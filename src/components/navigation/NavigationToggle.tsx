import React from 'react';
import { 
  IconButton, 
  Tooltip, 
  FormControlLabel, 
  Switch, 
  Typography, 
  Box, 
  useTheme 
} from '@mui/material';
import { 
  ViewModule as ViewModuleIcon, 
  Menu as MenuIcon 
} from '@mui/icons-material';
import { useNavigation } from '../../contexts/NavigationContext';

// Toggle with icons
export const IconToggle: React.FC = () => {
  const { navStyle, toggleNavStyle } = useNavigation();
  const theme = useTheme();
  
  return (
    <Tooltip title={`Switch to ${navStyle === 'sidebar' ? 'card' : 'sidebar'} navigation`}>
      <IconButton onClick={toggleNavStyle} color="inherit" size="large">
        {navStyle === 'sidebar' ? <ViewModuleIcon /> : <MenuIcon />}
      </IconButton>
    </Tooltip>
  );
};

// Toggle with switch
export const SwitchToggle: React.FC = () => {
  const { navStyle, toggleNavStyle } = useNavigation();
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <MenuIcon sx={{ mr: 1, opacity: navStyle === 'sidebar' ? 1 : 0.5 }} />
      <FormControlLabel
        control={
          <Switch
            checked={navStyle === 'card'}
            onChange={toggleNavStyle}
            color="primary"
          />
        }
        label=""
      />
      <ViewModuleIcon sx={{ ml: 1, opacity: navStyle === 'card' ? 1 : 0.5 }} />
    </Box>
  );
};

// Default export is a text-based toggle
const NavigationToggle: React.FC = () => {
  const { navStyle, toggleNavStyle } = useNavigation();
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        bgcolor: 'background.paper',
        px: 2,
        py: 0.5,
        borderRadius: 20,
        boxShadow: 1,
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': {
          boxShadow: 3,
        }
      }}
      onClick={toggleNavStyle}
    >
      {navStyle === 'sidebar' ? (
        <>
          <MenuIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="button" color="primary">Sidebar View</Typography>
        </>
      ) : (
        <>
          <ViewModuleIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="button" color="primary">Card View</Typography>
        </>
      )}
    </Box>
  );
};

export default NavigationToggle; 