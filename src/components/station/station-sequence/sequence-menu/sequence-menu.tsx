import { Box, Menu, MenuItem, Typography } from '@mui/material';

import { useStyles } from './styles';

interface ISequenceMenuItem {
  icon: React.ReactNode;
  text: string;
  isDelete: boolean;
  onClick: () => void;
}

interface ISequenceMenuProps {
  anchorEl: HTMLElement | undefined;
  open: boolean;
  onClose: () => void;
  menuItems: ISequenceMenuItem[];
}

export function SequenceMenu({
  anchorEl,
  open,
  onClose,
  menuItems,
}: ISequenceMenuProps): React.ReactNode {
  const { cx, classes } = useStyles();

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      className={classes.menu}
    >
      {menuItems.map((item) => {
        return (
          <MenuItem
            key={item.text}
            className={cx(classes.menuItem, {
              [classes.delete]: item.isDelete,
            })}
            onClick={item.onClick}
          >
            <Box className={classes.iconContainer}>{item.icon}</Box>
            <Typography className={cx({ [classes.delete]: item.isDelete })}>
              {item.text}
            </Typography>
          </MenuItem>
        );
      })}
    </Menu>
  );
}
