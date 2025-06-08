import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Box,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';
import menuItems, { MenuItem } from '../../config/menuItems';
import { useNavigation } from '../../contexts/NavigationContext';

const drawerWidth = 280;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

interface MenuItemProps {
  item: MenuItem;
  level?: number;
  openItems: string[];
  setOpenItems: (ids: string[]) => void;
  selectedItem: string | null;
  setSelectedItem: (id: string | null) => void;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ 
  item, 
  level = 0, 
  openItems, 
  setOpenItems,
  selectedItem,
  setSelectedItem 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setNavStyle } = useNavigation();
  
  const isActive = item.path ? (location.pathname === item.path || 
                  (item.children && item.children.length > 0 && location.pathname.startsWith(item.path))) : false;
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = item.id ? openItems.includes(item.id) : false;
  const Icon = item.icon;

  const handleClick = () => {
    if (hasChildren && item.id) {
      // Toggle the menu
      if (isOpen) {
        setOpenItems(openItems.filter(id => id !== item.id));
      } else {
        setOpenItems([...openItems, item.id]);
      }
      
      // Also navigate if path exists
      if (item.path) {
        navigate(item.path);
        setSelectedItem(item.id);
        setNavStyle('sidebar'); // Switch to sidebar navigation
      }
    } else if (item.path) {
      // Just navigate for menu items without children
      navigate(item.path);
      setSelectedItem(item.id);
      setNavStyle('sidebar'); // Switch to sidebar navigation
    }
  };

  console.log(`Rendering menu item ${item.title}, hasChildren: ${hasChildren}, isOpen: ${isOpen}`);
  
  return (
    <>
      <ListItem 
        disablePadding 
        sx={{ 
          display: 'block',
          bgcolor: isActive ? 'action.selected' : 'transparent',
          pl: level * 2,
        }}
      >
        <ListItemButton onClick={handleClick} sx={{ minHeight: 48 }}>
          <ListItemIcon 
            sx={{ 
              minWidth: 36,
              color: isActive ? item.color || 'primary.main' : 'inherit',
            }}
          >
            <Icon />
          </ListItemIcon>
          <ListItemText 
            primary={item.title} 
            primaryTypographyProps={{
              color: isActive ? item.color || 'primary.main' : 'inherit',
              fontWeight: isActive ? 600 : 400,
            }}
          />
          {hasChildren && (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
        </ListItemButton>
      </ListItem>
      {hasChildren && item.children && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child) => (
              <MenuItemComponent 
                key={child.id} 
                item={child} 
                level={level + 1} 
                openItems={openItems}
                setOpenItems={setOpenItems}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const SidebarNavigation: React.FC = () => {
  const location = useLocation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Auto-expand menus based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    const newOpenItems: string[] = [];
    
    const findParentMenus = (items: MenuItem[]) => {
      items.forEach(item => {
        // Check if this is a parent item of the current path
        if (item.path && currentPath.startsWith(item.path) && item.children && item.children.length > 0) {
          if (item.id) newOpenItems.push(item.id);
        }
        
        // Check if any child items match the current path
        if (item.children && item.children.length > 0) {
          item.children.forEach(child => {
            if (child.path && currentPath.startsWith(child.path)) {
              if (item.id) newOpenItems.push(item.id);
            }
          });
          
          // Also search in nested children
          findParentMenus(item.children);
        }
      });
    };
    
    findParentMenus(menuItems);
    console.log('Auto-expanding menu items:', newOpenItems);
    setOpenItems(newOpenItems);
  }, [location.pathname]);

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <Box sx={{ py: 2, px: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <img 
            src="/images/logos/cbpp-full-logo.png" 
            alt="CBPP - Community-Based Procurement Platform" 
            style={{ height: 40 }} 
          />
        </Box>
      </Box>
      <Divider />
      <List sx={{ width: '100%', pt: 1, overflowY: 'auto', maxHeight: 'calc(100vh - 90px)' }}>
        {menuItems.map((item) => (
          <MenuItemComponent 
            key={item.id} 
            item={item} 
            openItems={openItems}
            setOpenItems={setOpenItems}
            selectedItem={null}
            setSelectedItem={() => {}}
          />
        ))}
      </List>
    </StyledDrawer>
  );
};

export default SidebarNavigation; 