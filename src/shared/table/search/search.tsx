import { TextField, InputAdornment } from '@mui/material';

import SearchIcon from '@/assets/icon/search.svg?react';

import { useStyles } from './styles';

interface ISearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Search({ value, onChange }: ISearchProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <TextField
      placeholder="Search"
      value={value}
      onChange={onChange}
      className={classes.search}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
