import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@mui/material';

import { Button } from '@/shared/button';

import AddIcon from '@/assets/icon/attribute.svg?react';

import { useStyles } from './styles';

interface IDynamicValuesTableProps {
  title: string;
  onAddRow: () => void;
  children: React.ReactNode;
}

export const DynamicValuesTable = forwardRef<
  HTMLDivElement,
  IDynamicValuesTableProps
>(function AttributeManager(
  { title, onAddRow, children },
  ref,
): React.ReactNode {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.wrapper} ref={ref}>
      <Typography className={classes.title}>{title}</Typography>
      <Box className={classes.attributeContainer}>{children}</Box>
      <Button onClick={onAddRow} className={classes.addButton}>
        <AddIcon /> {t('dynamicTable.addRow')}
      </Button>
    </Box>
  );
});
