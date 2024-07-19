import { useNavigate } from 'react-router-dom';

import { type ColumnDef } from '@tanstack/react-table';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SctionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { type IOrder } from './types';

import { useStyles } from './styles';

interface IOrderTableProps<T> {
  title: string;
  buttonText: string;
  columns: ColumnDef<T, string>[];
  data: IOrder[];
}

export function OrderTable({
  title,
  buttonText,
  data,
  columns,
}: IOrderTableProps<IOrder>): React.ReactNode {
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
