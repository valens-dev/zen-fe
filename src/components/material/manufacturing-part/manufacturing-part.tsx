import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SctionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { MATERIAL_TABLE, manufactoringData } from '../constants';

import { useStyles } from './styles';

export function ManufacturingPart(): React.ReactNode {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const getColumns = MATERIAL_TABLE();

  return (
    <Box className={classes.wrapper}>
      <SctionHeader
        title={t('material.manufacturingPart')}
        actions={
          <Button startIcon={<AddIcon />}>
            {t('material.buttonManufacturingPart')}
          </Button>
        }
      />
      <Table columns={getColumns} data={manufactoringData} />
    </Box>
  );
}
