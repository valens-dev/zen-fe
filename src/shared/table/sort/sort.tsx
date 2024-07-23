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

import { type ISortByOption } from './types';

import { useStyles } from './styles';

interface ISortByProps {
  options: ISortByOption[];
  selectedSorts: string[];
  onSortChange: (value: string[]) => void;
}

export function SortBy({
  options,
  selectedSorts,
  onSortChange,
}: ISortByProps): React.ReactNode {
  const { classes } = useStyles();

  function handleChange(event: SelectChangeEvent<string[]>): void {
    const newValue = event.target.value as string[];
    const selectedMap = new Map<string, string>();

    for (const value of newValue) {
      const category = options.find((option) => {
        return value.startsWith(`${option.title.toLowerCase()}-`);
      });
      if (category) {
        selectedMap.set(category.title.toLowerCase(), value);
      }
    }

    const updatedSelections = [...selectedMap.values()];

    onSortChange(updatedSelections);
  }

  function handleClear(): void {
    onSortChange([]);
  }

  return (
    <FormControl fullWidth className={classes.sortBy}>
      <Select
        multiple
        value={selectedSorts}
        onChange={handleChange}
        displayEmpty
        renderValue={() => {
          return 'Sort by';
        }}
        className={classes.select}
      >
        <Box className={classes.header}>
          <Typography className={classes.title}>Sort</Typography>
          <Button onClick={handleClear} className={classes.clearButton}>
            Clear
          </Button>
        </Box>
        <Divider />
        {options.flatMap((option) => {
          return [
            <>
              <Divider />
              <ListSubheader
                key={`header-${option.title}`}
                className={classes.listSubheader}
              >
                {option.title}
              </ListSubheader>
              {...option.values.map((value) => {
                const itemValue = `${option.title.toLowerCase()}-${value.value}`;
                const isSelected = selectedSorts.includes(itemValue);
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
              })}
            </>,
          ];
        })}
      </Select>
    </FormControl>
  );
}
