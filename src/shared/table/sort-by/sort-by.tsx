import type React from 'react';
import { type SortingState } from '@tanstack/react-table';

import {
  Box,
  Select,
  Button,
  Divider,
  MenuItem,
  Typography,
  FormControl,
  ListItemIcon,
  ListSubheader,
  type SelectChangeEvent,
} from '@mui/material';

import CheckIcon from '@/assets/icon/check.svg?react';

import { useStyles } from './styles';

interface ISortByOption {
  title: string;
  values: { value: string; label: string }[];
}

interface ISortByProps {
  options: ISortByOption[];
  sorting: SortingState;
  handleSortChange: (event: SelectChangeEvent<string[]>) => void;
  handleClear: () => void;
}

export function SortBy({
  options,
  sorting,
  handleSortChange,
  handleClear,
}: ISortByProps): React.ReactElement {
  const { classes } = useStyles();

  const selectedValues = sorting.map((s) => {
    return `${s.id}-${s.desc ? 'desc' : 'asc'}`;
  });

  const renderOptions = options.flatMap((option) => {
    return [
      <Divider key={`divider-${option.title}`} />,
      <ListSubheader
        key={`header-${option.title}`}
        className={classes.listSubheader}
      >
        {option.title}
      </ListSubheader>,
      ...option.values.map((value) => {
        const itemValue = `${option.title.toLowerCase()}-${value.value}`;
        const isSelected = selectedValues.includes(itemValue);
        return (
          <MenuItem
            key={`value-${option.title}-${value.label}`}
            value={itemValue}
            className={classes.menuItem}
          >
            <ListItemIcon className={classes.iconContainer}>
              {isSelected ? <CheckIcon /> : undefined}
            </ListItemIcon>
            <span className={classes.itemLabel}>{value.label}</span>
          </MenuItem>
        );
      }),
    ];
  });

  return (
    <FormControl className={classes.sortBy}>
      <Select
        multiple
        value={selectedValues}
        onChange={handleSortChange}
        renderValue={() => {
          return <Typography className={classes.title}>Sort by</Typography>;
        }}
        displayEmpty
      >
        <Box className={classes.header}>
          <Typography className={classes.title}>Sort</Typography>
          <Button onClick={handleClear} className={classes.clearButton}>
            Clear
          </Button>
        </Box>
        {renderOptions}
      </Select>
    </FormControl>
  );
}
