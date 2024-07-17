import { useState } from 'react';

import {
  Box,
  List,
  Button,
  Popover,
  ListItem,
  Checkbox,
  TextField,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import MenuIcon from '@/assets/icon/menu.svg?react';

import { useStyles } from './styles';

interface ICustomSelectProps {
  value: string;
  options: string[];
  onChange: (newValue: string) => void;
  onAddNew: (newOption: string) => void;
  disabled?: boolean;
}

export function CustomSelect({
  value,
  options,
  onChange,
  onAddNew,
  disabled = false,
}: ICustomSelectProps): React.ReactElement {
  const { classes } = useStyles();

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newValue, setNewValue] = useState('');
  const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>();

  function handleAddNewOption(): void {
    if (newValue.trim()) {
      onAddNew(newValue);
      setNewValue('');
      setIsAddingNew(false);
    }
  }

  function handleOpen(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(): void {
    setAnchorEl(undefined);
    setIsAddingNew(false);
  }

  return (
    <Box className={classes.selectContainer}>
      <Button
        aria-describedby={anchorEl ? 'custom-select-popover' : undefined}
        onClick={handleOpen}
        disabled={disabled}
        className={classes.attributeSelect}
      >
        {value || ''}
      </Button>
      <Popover
        id={anchorEl ? 'custom-select-popover' : undefined}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          {options.map((option) => {
            return (
              <ListItem
                key={option}
                onClick={() => {
                  onChange(option);
                  handleClose();
                }}
                className={classes.popoverOption}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={option === value}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={option} />
              </ListItem>
            );
          })}
          {isAddingNew ? (
            <ListItem>
              <TextField
                value={newValue}
                onChange={(e) => {
                  return setNewValue(e.target.value);
                }}
                className={classes.newOptionInput}
              />
              <Button onClick={handleAddNewOption}>Add</Button>
            </ListItem>
          ) : (
            <ListItem
              onClick={() => {
                return setIsAddingNew(true);
              }}
              className={classes.popoverOption}
            >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Add New" />
            </ListItem>
          )}
        </List>
      </Popover>
    </Box>
  );
}
