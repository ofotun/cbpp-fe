import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Divider,
  Paper,
  Tooltip,
  Fade,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';
import menuItems, { MenuItem } from '../../config/menuItems';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)<{ cardcolor?: string }>(({ theme, cardcolor }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s, box-shadow 0.3s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
  borderTop: cardcolor ? `4px solid ${cardcolor}` : `4px solid ${theme.palette.primary.main}`,
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  paddingBottom: 0,
}));

interface CardNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuCard: React.FC<{
  item: MenuItem;
  activePath: string;
  onItemSelect: () => void;
}> = ({ item, activePath, onItemSelect }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const isActive = activePath === item.path || (item.children && activePath.startsWith(item.path || ''));
  const Icon = item.icon;

  const handleCardClick = () => {
    if (item.children) {
      setExpanded(!expanded);
    } else if (item.path) {
      navigate(item.path);
      onItemSelect();
    }
  };

  const handleSubItemClick = (path: string | undefined) => (event: React.MouseEvent) => {
    event.stopPropagation();
    if (path) {
      navigate(path);
      onItemSelect();
    }
  };

  return (
    <StyledCard cardcolor={item.color}>
      <Box onClick={handleCardClick}>
        <StyledCardHeader
          avatar={
            <Box
              sx={{
                bgcolor: item.color || 'primary.main',
                borderRadius: '50%',
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon sx={{ color: 'white' }} />
            </Box>
          }
          action={
            item.children && (
              <IconButton size="small" sx={{ mt: 1 }}>
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            )
          }
          title={
            <Typography variant="h6" component="div">
              {item.title}
            </Typography>
          }
        />
        <CardContent sx={{ pt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {item.description || `Access ${item.title.toLowerCase()} features and information`}
          </Typography>
        </CardContent>
      </Box>

      {item.children && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider sx={{ mt: 1 }} />
          <List dense>
            {item.children.map((child) => (
              <ListItem key={child.id} disablePadding>
                <ListItemButton
                  onClick={handleSubItemClick(child.path)}
                  selected={activePath === child.path}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <child.icon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={child.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </StyledCard>
  );
};

const CardNavigation: React.FC<CardNavigationProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  return (
    <Fade in={isOpen} timeout={300}>
      <Paper sx={{ 
        p: 3, 
        mx: 'auto', 
        maxWidth: 1200,
        display: isOpen ? 'block' : 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        bgcolor: 'background.paper',
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
          Application Modules
        </Typography>
        <Grid container spacing={3}>
          {menuItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <MenuCard 
                item={item}
                activePath={location.pathname}
                onItemSelect={onClose}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Fade>
  );
};

export default CardNavigation; 