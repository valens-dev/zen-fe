import { useState } from 'react';

import {
  flexRender,
  useReactTable,
  type ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  type PaginationState,
  getPaginationRowModel,
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

import { Search } from './search';
import { Pagination } from './pagination';

import { useStyles } from './styles';

interface ITableProps<T> {
  columns: ColumnDef<T, string>[];
  data: T[];
}

export function Table<T>({ columns, data }: ITableProps<T>): React.ReactNode {
  const { classes } = useStyles();

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [globalFilter, setGlobalFilter] = useState<string>('');

  const table = useReactTable({
    state: {
      pagination,
      globalFilter,
    },
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
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
    table.setPageIndex(page - 1);
  }

  function handlePageSizeChange(event: SelectChangeEvent<number>): void {
    table.setPageSize(Number(event.target.value));
  }

  return (
    <TableContainer component={Box} className={classes.tableContainer}>
      <Search value={globalFilter} onChange={handleGlobalFilterChange} />

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

        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </BaseTable>

      <Pagination
        pageIndex={pagination.pageIndex}
        pageSize={pagination.pageSize}
        totalRows={table.getFilteredRowModel().rows.length}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </TableContainer>
  );
}
