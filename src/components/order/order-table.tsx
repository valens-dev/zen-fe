import { useNavigate } from 'react-router-dom';

import { type ColumnDef } from '@tanstack/react-table';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SctionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { useStyles } from './styles';

interface IMaterialTableProps<T> {
  title: string;
  buttonText: string;
  columns: ColumnDef<T, string>[];
  data: T[];
}

export function OrderTable<T>({
  title,
  buttonText,
  data,
  columns,
}: IMaterialTableProps<T>): React.ReactNode {
  const { classes } = useStyles();
  const navigate = useNavigate();

  function handleOpenAddPage(): void {
    navigate('/order/add-order');
  }

  return (
    <Box className={classes.wrapper}>
      <SctionHeader
        title={title}
        actions={
          <Button onClick={handleOpenAddPage} startIcon={<AddIcon />}>
            {buttonText}
          </Button>
        }
      />
      <Table columns={columns} data={data} />
    </Box>
  );
}
