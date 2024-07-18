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
  onClick: () => void;
}

export function CustomTable<T>({
  title,
  buttonText,
  data,
  columns,
  onClick,
}: IMaterialTableProps<T>): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <SctionHeader
        title={title}
        actions={
          <Button onClick={onClick} startIcon={<AddIcon />}>
            {buttonText}
          </Button>
        }
      />
      <Table columns={columns} data={data} />
    </Box>
  );
}
