import { useNavigate } from 'react-router-dom';

import { type ColumnDef } from '@tanstack/react-table';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';
import { type ISortByOption } from '@/shared/table/sort/types';

import { SectionHeader } from '@/layouts/section-header';

import { type MaterialType } from '@/types/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { type IProduct } from './types';

import { useStyles } from './styles';

interface IMaterialTableProps {
  title: string;
  buttonText: string;
  materialType: MaterialType;
  columns: ColumnDef<IProduct, string>[];
  data: IProduct[];
  sortByOptions?: ISortByOption[];
}

export function MaterialTable({
  title,
  buttonText,
  materialType,
  data,
  columns,
  sortByOptions,
}: IMaterialTableProps): React.ReactNode {
  const { classes } = useStyles();
  const navigate = useNavigate();

  function handleOpenAddPage(): void {
    navigate('/material/add-material', { state: { materialType } });
  }

  return (
    <Box className={classes.wrapper}>
      <SectionHeader
        title={title}
        actions={
          <Button onClick={handleOpenAddPage} startIcon={<AddIcon />}>
            {buttonText}
          </Button>
        }
      />
      {sortByOptions ? (
        <Table columns={columns} data={data} sortByOptions={sortByOptions} />
      ) : undefined}
    </Box>
  );
}
