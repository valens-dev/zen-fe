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
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  Table as BaseTable,
  type SelectChangeEvent,
} from '@mui/material';

import { Pagination } from './pagination';
import { SearchBar } from './search/search';

import { useStyles } from './styles';

interface ITableProps<T, P> {
  columns: ColumnDef<T, string>[];
  data: T[];
  fetchData?: (params: P) => void;
}

export function Table<T, P>({
  columns,
  data,
  fetchData,
}: ITableProps<T, P>): React.ReactNode {
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

  function handlePageChange(
    _event: React.ChangeEvent<unknown>,
    page: number,
  ): void {
    table.setPageIndex(page - 1);
    fetchData?.({
      page,
    } as P);
  }

  function handlePageSizeChange(event: SelectChangeEvent<number>): void {
    const pageSize = Number(event.target.value);
    table.setPageSize(pageSize);
    fetchData?.({
      limit: pageSize,
    } as P);
  }

  function handleGlobalFilterChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    const filter = event.target.value;
    setGlobalFilter(filter);
    fetchData?.({
      valueName: filter,
    } as P);
  }

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <SearchBar
        label="Search"
        value={globalFilter}
        onChange={handleGlobalFilterChange}
      />
      <Box className={classes.tableWrapper}>
        <BaseTable className={classes.baseTable}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <TableRow key={headerGroup.id} className={classes.headerRow}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableCell key={header.id} className={classes.headerCell}>
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
                      <TableCell key={cell.id} className={classes.bodyCell}>
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
      </Box>
      <Box className={classes.tableFooter}>
        <Box>
          <Box className={classes.tablePagination}>
            <Pagination
              pageIndex={pagination.pageIndex}
              pageSize={pagination.pageSize}
              totalRows={table.getFilteredRowModel().rows.length}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          </Box>
        </Box>
      </Box>
    </TableContainer>
  );
}
