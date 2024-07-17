import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SctionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { productData, MATERIAL_TABLE } from '../constants';

import { useStyles } from './styles';

export function Product(): React.ReactNode {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const getColumns = MATERIAL_TABLE();

  return (
    <Box className={classes.wrapper}>
      <SctionHeader
        title={t('material.product')}
        actions={
          <Button startIcon={<AddIcon />}>{t('material.buttonProduct')}</Button>
        }
      />
      <Table columns={getColumns} data={productData} />
    </Box>
  );
}
