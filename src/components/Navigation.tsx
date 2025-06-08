import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import menuItems, { MenuItem } from '../config/menuItems';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  // Auto-open parent menus based on current path
  React.useEffect(() => {
    const currentPath = location.pathname;
    const parentPaths: string[] = [];
    
    const findParentPaths = (items: MenuItem[], path: string) => {
      for (const item of items) {
        if (item.children) {
          for (const child of item.children) {
            if (child.path === path || (path && child.path && path.startsWith(child.path))) {
              if (item.path) parentPaths.push(item.path);
              break;
            }
          }
          findParentPaths(item.children, path);
        }
      }
    };
    
    findParentPaths(menuItems, currentPath);
    setOpenItems(parentPaths);
  }, [location.pathname]);

  const handleClick = (path: string | undefined) => {
    if (!path) return;
    
    setOpenItems((prev) =>
      prev.includes(path) ? prev.filter((item) => item !== path) : [...prev, path]
    );
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const isActive = location.pathname === item.path;
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = item.path ? openItems.includes(item.path) : false;
    const Icon = item.icon;

    return (
      <React.Fragment key={item.id}>
        <ListItem
          button
          component={item.path ? Link : 'div' as any}
          to={item.path}
          onClick={() => hasChildren && handleClick(item.path)}
          sx={{
            pl: level * 2 + 2,
            backgroundColor: isActive ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
            color: isActive ? (item.color || 'primary.main') : 'inherit',
          }}
        >
          <ListItemIcon sx={{ 
            minWidth: 40,
            color: isActive ? (item.color || 'primary.main') : 'inherit' 
          }}>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={item.title} />
          {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {hasChildren && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children?.map((child) => renderMenuItem(child, level + 1))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {menuItems.map((item) => renderMenuItem(item))}
    </List>
  );
};

export default Navigation; 