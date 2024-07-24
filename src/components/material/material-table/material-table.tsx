import { useNavigate } from 'react-router-dom';
import { type ColumnDef } from '@tanstack/react-table';

import { useMaterial } from '@/services/material';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SectionHeader } from '@/layouts/section-header';

import { useTableFilters } from '@/hooks/use-table-filters';

import { type MaterialType } from '@/types/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { type IProduct } from './types';

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

  const {
    data: materialData,
    isLoading,
    isError,
  } = useMaterial({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    name: globalFilter,
    type: materialType,
  });

  function handleOpenAddPage(): void {
    navigate('/material/add-material', { state: { materialType } });
  }

  /**
   * TODO: Implement proper loadding state management
   */
  if (isLoading) {
    return <Box>Loading</Box>;
  }

  /**
   * TODO: Implement proper error state management
   */
  if (isError) {
    return <Box>Error</Box>;
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
        data={materialData?.data}
        totalCount={materialData?.totalCount}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Box>
  );
}
