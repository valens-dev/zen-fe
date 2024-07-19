import { type ChangeEvent } from 'react';

import { TextField, IconButton, InputAdornment } from '@mui/material';

import SearchIcon from '@/assets/icon/search.svg?react';

import { useStyles } from './styles';

interface ISearchBarProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({
  label,
  value,
  onChange,
}: ISearchBarProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <TextField
      className={classes.searchBar}
      placeholder={label}
      value={value}
      variant="outlined"
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
