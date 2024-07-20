import { forwardRef, type ReactNode } from 'react';

import { Box, Typography } from '@mui/material';

import { Button } from '@/shared/button';

import AddIcon from '@/assets/icon/attribute.svg?react';

import { useStyles } from './styles';

interface IAttributeManagerProps {
  title: string;
  onAddRow: () => void;
  children: ReactNode;
}

export const AttributeManager = forwardRef<
  HTMLDivElement,
  IAttributeManagerProps
>(function AttributeManager(
  { title, onAddRow, children },
  ref,
): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.attributeWrapper} ref={ref}>
      <Typography className={classes.title}>{title}</Typography>
      <Box className={classes.attributeContainer}>{children}</Box>
      <Button onClick={onAddRow} className={classes.addButton}>
        <AddIcon /> Add Row
      </Button>
    </Box>
  );
});
