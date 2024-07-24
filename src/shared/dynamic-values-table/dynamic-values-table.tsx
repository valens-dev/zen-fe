import { forwardRef } from 'react';

import { Box, Typography } from '@mui/material';

import { Button } from '@/shared/button';

import AddIcon from '@/assets/icon/attribute.svg?react';

import { useStyles } from './styles';

interface IDynamicValuesTableProps {
  title: string;
  onAddRow: () => void;
  children: React.ReactNode;
  buttonText: string;
}

export const DynamicValuesTable = forwardRef<
  HTMLDivElement,
  IDynamicValuesTableProps
>(function AttributeManager(
  { title, onAddRow, children, buttonText },
  ref,
): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper} ref={ref}>
      <Typography className={classes.title}>{title}</Typography>
      <Box className={classes.attributeContainer}>{children}</Box>
      <Button onClick={onAddRow} className={classes.addButton}>
        <AddIcon />
        {buttonText}
      </Button>
    </Box>
  );
});
