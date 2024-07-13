import { Box, Typography } from '@mui/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { Button } from '../button';

import { useStyles } from './styles';

interface IHeaderProps {
  title: string;
  onButtonClick: () => void;
  buttonText: string;
}

export function TableHeader({
  title,
  onButtonClick,
  buttonText,
}: IHeaderProps): React.ReactElement {
  const { classes } = useStyles();

  return (
    <Box className={classes.headerContainer}>
      <Typography className={classes.title}>{title}</Typography>
      <Button onClick={onButtonClick}>
        <AddIcon />
        <Typography className={classes.buttonText}>{buttonText}</Typography>
      </Button>
    </Box>
  );
}
