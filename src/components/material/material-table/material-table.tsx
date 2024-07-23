import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMaterials } from '@/services/material-api';
import { type ColumnDef, type PaginationState } from '@tanstack/react-table';

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
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [globalFilter, setGlobalFilter] = useState<string>('');

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

  function handlePaginationChange(
    updater: PaginationState | ((old: PaginationState) => PaginationState),
  ): void {
    if (typeof updater === 'function') {
      const newState = updater({ pageIndex: page, pageSize });
      setPage(newState.pageIndex);
      setPageSize(newState.pageSize);
    } else {
      setPage(updater.pageIndex);
      setPageSize(updater.pageSize);
    }
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
