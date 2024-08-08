import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Menu,
  Button,
  // Avatar,
  MenuItem,
  Typography,
} from '@mui/material';

import { LanguageSwitcher } from '@/components/language-switcher';

import IconArrowDropUp from '@/assets/icon/arrow-up.svg?react';
import IconArrowDropDown from '@/assets/icon/arrow-down.svg?react';

import { LazyImage } from '../lazy-image';

import { getUserMenuItems } from './constants';

import { useStyles } from './styles';

export function UserMenu(): React.ReactNode {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | string>('');
  const open = Boolean(anchorEl);
  const { classes } = useStyles();
  const navigate = useNavigate();
  const userName = 'Jacob';

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(): void {
    setAnchorEl('');
  }
  function navigateBack(): void {
    navigate('/station');
  }
  function userImage(): JSX.Element {
    return (
      <Box className={classes.imageContainer}>
        <LazyImage
          alt="altName"
          // src="@/assets/icon/profile.png"
          src="https://via.placeholder.com/30"
          className={classes.image}
        />
      </Box>
    );
  }

  const menuItems = getUserMenuItems(handleClose, navigateBack);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        onClick={handleClick}
        startIcon={userImage()}
        // startIcon={<Avatar sx={{ bgcolor: '#4c6ef5' }}>JJ</Avatar>}
        endIcon={open ? <IconArrowDropUp /> : <IconArrowDropDown />}
        sx={{
          textTransform: 'none',
          borderRadius: '20px',
          border: '1px solid #4c6ef5',
          padding: '5px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#0e1622',
          '&:hover': {
            backgroundColor: '#f4f4f4',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginLeft: '10px',
          }}
        >
          <Typography variant="body2" sx={{ color: '#718096' }}>
            Welcome back 👋
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: 'bold', color: '#0e1622' }}
          >
            {userName}
          </Typography>
        </Box>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            borderRadius: '10px',
            minWidth: '200px',
            padding: '10px',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleClose} sx={{ padding: '10px' }}>
          <LanguageSwitcher />
        </MenuItem>
        {menuItems.map((item) => {
          return (
            <MenuItem
              className={classes.menuItem}
              key={item.id}
              onClick={item.onClick}
              sx={{ padding: '10px', ...item.style }}
            >
              {item.icon}
              {item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
