import { useState, type SetStateAction } from 'react';

import {
  Box,
  List,
  Input,
  Button,
  Popover,
  ListItem,
  Checkbox,
  ListItemText,
} from '@mui/material';

import AddIcon from '@/assets/icon/attribute.svg?react';

import { useStyles } from '../styles';

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
}: ICustomSelectProps): React.ReactNode {
  const { classes } = useStyles();

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newValue, setNewValue] = useState('');
  const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>();

  function handleAddNewOption(): void {
    if (newValue.trim()) {
      onAddNew(newValue);
      setNewValue('');
      setIsAddingNew(false);
      setAnchorEl(undefined);
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
        transitionDuration={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            style: {
              width: anchorEl?.clientWidth,
            },
          },
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
                <Checkbox
                  edge="start"
                  checked={option === value}
                  tabIndex={-1}
                  disableRipple
                  className={classes.optionCheckbox}
                />
                <ListItemText primary={option} className={classes.optionText} />
              </ListItem>
            );
          })}
          {isAddingNew ? (
            <ListItem className={classes.attributeInput}>
              <Input
                value={newValue}
                name="attribute"
                onChange={(e: {
                  target: { value: SetStateAction<string> };
                }) => {
                  setNewValue(e.target.value);
                }}
                className={classes.newOptionInput}
              />
              <Button onClick={handleAddNewOption}>Add</Button>
            </ListItem>
          ) : (
            <Button
              onClick={() => {
                setIsAddingNew(true);
              }}
              className={classes.addButton}
            >
              <AddIcon /> Add New
            </Button>
          )}
        </List>
      </Popover>
    </Box>
  );
}
