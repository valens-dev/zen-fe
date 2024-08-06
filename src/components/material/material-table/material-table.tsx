import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type ColumnDef, type SortingState } from '@tanstack/react-table';

import { useMaterial } from '@/services/material';
import { transformMaterialsToProducts } from '@/services/material/utils';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SectionHeader } from '@/layouts/section-header';

import { useTableFilters } from '@/hooks/use-table-filters';

import { type MaterialType } from '@/types/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { type IProduct } from './types';
import { sortByOptions } from './constants';

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
  const navigate = useNavigate();

  const { classes } = useStyles();
  const { globalFilter, setGlobalFilter, pagination, setPagination } =
    useTableFilters();

  // Ensure the correct type for SortingState
  const [sorting, setSorting] = useState<SortingState>([]);

  const sortFields = sorting.map((sort) => {
    return sort.id;
  });
  const sortFieldsOrders = sorting.map((sort) => {
    return sort.desc ? 'DESC' : 'ASC';
  });

  const {
    data: materialData,
    isLoading,
    isError,
  } = useMaterial({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    name: globalFilter,
    type: [materialType],
    sortFields,
    sortFieldsOrders,
  });

  function handleOpenAddPage(): void {
    navigate(`/material/add-material?materialType=${materialType}`);
  }

  function handleMaterialClick(materialId: number): void {
    navigate(`/material/edit-material?id=${materialId}&type=${materialType}`);
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
      <Table
        columns={columns}
        data={transformMaterialsToProducts(materialData?.data)}
        totalCount={materialData?.totalCount ?? 0}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        pagination={pagination}
        setPagination={setPagination}
        sorting={sorting}
        setSorting={setSorting}
        isLoading={isLoading}
        isError={isError}
        onRowClick={handleMaterialClick}
        sortOptions={sortByOptions}
      />
    </Box>
  );
}
