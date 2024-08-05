import { useState, type Dispatch, type SetStateAction } from 'react';
import {
  flexRender,
  useReactTable,
  type ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  type PaginationState,
} from '@tanstack/react-table';

import {
  Box,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  Table as BaseTable,
  type SelectChangeEvent,
} from '@mui/material';

import { Error } from '@/shared/status-components/error';
import { Loading } from '@/shared/status-components/loading';

import { Search } from './search';
import { Pagination } from './pagination';
import { SortBy } from './sort-by/sort-by';
import { type ISortByOption } from './sort-by/types';

import { useStyles } from './styles';

interface ITableData {
  id: number;
}

interface ITableProps<T> {
  columns: ColumnDef<T, string>[];
  data?: T[];
  totalCount: number;
  globalFilter: string;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
  isLoading?: boolean;
  isError?: boolean;
  onRowClick?: (materialId: number) => void;
  sortOptions: ISortByOption[];
}

export function Table<T extends ITableData>({
  columns,
  data,
  totalCount,
  pagination,
  setPagination,
  globalFilter,
  setGlobalFilter,
  isLoading,
  isError,
  onRowClick,
  sortOptions,
}: ITableProps<T>): React.ReactNode {
  const { classes } = useStyles();
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    state: {
      globalFilter,
      pagination,
      sorting,
    },
    data: data ?? [],
    columns,
    rowCount: totalCount,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    manualFiltering: true,
    manualPagination: true,
  });

  function handleGlobalFilterChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setGlobalFilter(event.target.value);
  }

  function handlePageChange(
    _event: React.ChangeEvent<unknown>,
    page: number,
  ): void {
    setPagination({ ...pagination, pageIndex: page - 1 });
  }

  function handlePageSizeChange(event: SelectChangeEvent<number>): void {
    setPagination({ ...pagination, pageSize: Number(event.target.value) });
  }

  function handleSortChange(event: SelectChangeEvent<string[]>): void {
    const value = event.target.value as string[];
    const newSorting = value.map((v) => {
      const [id, desc] = v.split('-');
      return { id, desc: desc === 'desc' };
    });
    setSorting(newSorting);
  }

  function handleClearSorting(): void {
    setSorting([]);
  }

  let tableContent: React.ReactNode;

  if (isError) {
    tableContent = (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length} align="center">
            <Error />
          </TableCell>
        </TableRow>
      </TableBody>
    );
  } else if (isLoading) {
    tableContent = (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length} align="center">
            <Loading />
          </TableCell>
        </TableRow>
      </TableBody>
    );
  } else {
    tableContent = (
      <TableBody>
        {table.getRowModel().rows.map((row) => {
          return (
            <TableRow
              key={row.id}
              onClick={() => {
                if (onRowClick) {
                  return onRowClick(row.original.id);
                }
              }}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    );
  }

  return (
    <TableContainer component={Box} className={classes.tableContainer}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <SortBy
          options={sortOptions}
          sorting={sorting}
          handleSortChange={handleSortChange}
          handleClear={handleClearSorting}
        />
        <Search value={globalFilter} onChange={handleGlobalFilterChange} />
      </Box>

      <BaseTable className={classes.baseTable}>
        <TableHead className={classes.tableHead}>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHead>
        {tableContent}
      </BaseTable>
      <Pagination
        pageIndex={pagination.pageIndex}
        pageSize={pagination.pageSize}
        totalRows={totalCount}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </TableContainer>
  );
}
