import { useNavigate } from 'react-router-dom';

import { useMaterials } from '@/services/material-api';
import { type ColumnDef } from '@tanstack/react-table';
import { usePaginationAndFilter } from '@/hooks/use-pagination-and-filter';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SectionHeader } from '@/layouts/section-header';

import { type IProduct, type MaterialType } from '@/types/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { transformMaterialsToProducts } from './utils';

import { useStyles } from './styles';

interface IMaterialTableProps {
  title: string;
  buttonText: string;
  materialType: MaterialType;
  columns: ColumnDef<IProduct, string>[];
}

export function MaterialTable({
  title,
  buttonText,
  materialType,
  columns,
}: IMaterialTableProps): React.ReactNode {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const {
    page,
    pageSize,
    globalFilter,
    setGlobalFilter,
    handlePaginationChange,
  } = usePaginationAndFilter();

  const { data } = useMaterials({
    page: page + 1,
    limit: pageSize,
    type: materialType,
    name: globalFilter,
  });

  function handleOpenAddPage(): void {
    navigate('/material/add-material', { state: { materialType } });
  }

  const transformedData = data ? transformMaterialsToProducts(data) : [];

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
      <Table
        columns={columns}
        data={transformedData}
        pagination={{
          pageIndex: page,
          pageSize,
          setPagination: handlePaginationChange,
          globalFilter,
          setGlobalFilter,
        }}
      />
    </Box>
  );
}
