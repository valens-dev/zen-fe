import { Box, Typography } from '@mui/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { PrimaryButton } from '../primary-button';

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
      <PrimaryButton onClick={onButtonClick}>
        <AddIcon />
        <Typography className={classes.buttonText}>{buttonText}</Typography>
      </PrimaryButton>
    </Box>
  );
}
