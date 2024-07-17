import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SctionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { MATERIAL_TABLE, purchasingData } from '../constants';

import { useStyles } from './styles';

export function PurchasingPart(): React.ReactNode {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const getColumns = MATERIAL_TABLE();

  return (
    <Box className={classes.wrapper}>
      <SctionHeader
        title={t('material.purchasingPart')}
        actions={
          <Button startIcon={<AddIcon />}>
            {t('material.buttonPurchasingPart')}
          </Button>
        }
      />
      <Table columns={getColumns} data={purchasingData} />
    </Box>
  );
}
