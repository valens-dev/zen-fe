import { useState } from 'react';

import {
  flexRender,
  useReactTable,
  type ColumnDef,
  getCoreRowModel,
  type PaginationState,
  getPaginationRowModel,
} from '@tanstack/react-table';

import {
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableFooter,
  TableContainer,
  Table as BaseTable,
  type SelectChangeEvent,
} from '@mui/material';

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

  const table = useReactTable({
    state: {
      pagination,
    },
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

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
    <TableContainer component={Paper} className={classes.tableContainer}>
      <BaseTable className={classes.baseTable}>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id} className={classes.headerRow}>
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
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length}>
              <Pagination
                pageIndex={pagination.pageIndex}
                pageSize={pagination.pageSize}
                totalRows={data.length}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </BaseTable>
    </TableContainer>
  );
}
