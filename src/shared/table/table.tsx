import { useMemo, useState } from 'react';

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
  TableFooter,
  TableContainer,
  Table as BaseTable,
  type SelectChangeEvent,
} from '@mui/material';

import { SortBy } from './sort/sort';
import { Pagination } from './pagination';
import { SearchBar } from './search/search';
import { type ISortByOption } from './sort/types';

import { useStyles } from './styles';

interface ITableProps<T> {
  columns: ColumnDef<T, string>[];
  data: T[];
  sortByOptions?: ISortByOption[];
}

export function Table<T>({
  columns,
  data,
  sortByOptions,
}: ITableProps<T>): React.ReactNode {
  const { classes } = useStyles();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [selectedSorts, setSelectedSorts] = useState<string[]>([]);

  const sortedData = useMemo(() => {
    if (selectedSorts.length === 0) {
      return data;
    }
    const sorted = [...data];
    for (const sort of selectedSorts) {
      const [key, order] = sort.split('-') as [keyof T, string];
      sorted.sort((a, b) => {
        if (order === 'asc') {
          return a[key] > b[key] ? 1 : -1;
        }
        return a[key] < b[key] ? 1 : -1;
      });
    }
    return sorted;
  }, [data, selectedSorts]);

  const table = useReactTable({
    state: {
      pagination,
      globalFilter,
    },
    data: sortedData,
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
  }

  function handlePageSizeChange(event: SelectChangeEvent<number>): void {
    table.setPageSize(Number(event.target.value));
  }

  function handleGlobalFilterChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setGlobalFilter(event.target.value);
  }

  function handleSortChange(values: string[]): void {
    setSelectedSorts(values);
  }

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {sortByOptions ? (
          <SortBy
            options={sortByOptions}
            selectedSorts={selectedSorts}
            onSortChange={handleSortChange}
          />
        ) : undefined}
        <SearchBar
          label="Search"
          value={globalFilter}
          onChange={handleGlobalFilterChange}
        />
      </Box>
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
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length}>
              <Pagination
                pageIndex={pagination.pageIndex}
                pageSize={pagination.pageSize}
                totalRows={table.getFilteredRowModel().rows.length}
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
