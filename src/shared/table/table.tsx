import { type Dispatch, type SetStateAction } from 'react';
import {
  flexRender,
  useReactTable,
  type ColumnDef,
  getCoreRowModel,
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

import { Search } from './search';
import { Pagination } from './pagination';

import { useStyles } from './styles';

interface ITableProps<T> {
  columns: ColumnDef<T, string>[];
  data?: T[];
  totalCount?: number;
  globalFilter: string;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
}

export function Table<T>({
  columns,
  data,
  totalCount,
  pagination,
  setPagination,
  globalFilter,
  setGlobalFilter,
}: ITableProps<T>): React.ReactNode {
  const { classes } = useStyles();

  const table = useReactTable({
    state: {
      globalFilter,
      pagination,
    },
    data: data ?? [],
    columns,
    rowCount: totalCount,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
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
        totalRows={totalCount}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </TableContainer>
  );
}
