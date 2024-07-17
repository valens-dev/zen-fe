import { useNavigate } from 'react-router-dom';

import { type ColumnDef } from '@tanstack/react-table';

import { Box, Button } from '@mui/material';

import { Table } from '@/shared/table';

import { SctionHeader } from '@/layouts/section-header';

import { type MaterialType } from '@/pages/material-page/constants';

import AddIcon from '@/assets/icon/add.svg?react';

import { useStyles } from './styles';

interface IMaterialTableProps<T> {
  title: string;
  buttonText: string;
  materialType: MaterialType;
  columns: ColumnDef<T, string>[];
  data: T[];
}

export function MaterialTable<T>({
  title,
  buttonText,
  materialType,
  data,
  columns,
}: IMaterialTableProps<T>): React.ReactNode {
  const { classes } = useStyles();
  const navigate = useNavigate();

  function handleOpenAddPage(): void {
    navigate('/material/add-material', { state: { materialType } });
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
