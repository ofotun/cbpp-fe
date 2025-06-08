import React from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  Tooltip,
} from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';
import { useLanguage, SUPPORTED_LANGUAGES } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { currentLanguage, setLanguage, isLoading } = useLanguage();
  const { t } = useTranslation();
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = async (lang: typeof SUPPORTED_LANGUAGES[0]) => {
    await setLanguage(lang);
    handleClose();
  };

  return (
    <Box>
      <Tooltip title={t('accessibility.changeLanguage')}>
        <IconButton
          onClick={handleClick}
          size="large"
          aria-label={t('accessibility.changeLanguage')}
          disabled={isLoading}
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: 180,
          },
        }}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageSelect(lang)}
            selected={currentLanguage.code === lang.code}
            sx={{
              py: 1,
              px: 2,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body1">
                {lang.nativeName}
              </Typography>
              {lang.name !== lang.nativeName && (
                <Typography variant="caption" color="text.secondary">
                  {lang.name}
                </Typography>
              )}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSelector; 