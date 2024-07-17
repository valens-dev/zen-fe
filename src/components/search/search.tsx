import { TextField, IconButton, InputAdornment } from '@mui/material';

import SearchIcon from '@/assets/icon/search.svg?react';

import { useStyles } from './styles';

interface ISearchBarProps {
  onSearchChange: (query: string) => void;
}

export function SearchBar({
  onSearchChange,
}: ISearchBarProps): React.ReactNode {
  const { classes } = useStyles();

  function handleSearchChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    onSearchChange(event.target.value);
  }

  return (
    <TextField
      className={classes.searchBar}
      placeholder="Search"
      variant="outlined"
      onChange={handleSearchChange}
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
