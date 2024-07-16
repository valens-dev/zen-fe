import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SctionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { columns, manufactoringData } from '../constants';

import { useStyles } from './styles';

export function ManufacturingPart(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <SctionHeader
        title="Manufacturing part"
        actions={<Button startIcon={<AddIcon />}>Add BOM</Button>}
      />
      <Table columns={columns} data={manufactoringData} />
    </Box>
  );
}
