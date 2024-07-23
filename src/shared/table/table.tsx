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

interface ITableProps<T> {
  columns: ColumnDef<T, string>[];
  data: T[];
  pagination: {
    pageIndex: number;
    pageSize: number;
    setPagination: (
      pagination: PaginationState | ((old: PaginationState) => PaginationState),
    ) => void;
    globalFilter: string;
    setGlobalFilter: (filter: string) => void;
  };
}

export function Table<T>({
  columns,
  data,
  pagination,
}: ITableProps<T>): React.ReactNode {
  const { classes } = useStyles();

  const { pageIndex, pageSize, setPagination, globalFilter, setGlobalFilter } =
    pagination;

  const table = useReactTable({
    state: {
      pagination: { pageIndex, pageSize },
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
    setPagination({ pageIndex: page - 1, pageSize });
  }

  function handlePageSizeChange(event: SelectChangeEvent<number>): void {
    setPagination({ pageIndex, pageSize: Number(event.target.value) });
  }

  function handleGlobalFilterChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setGlobalFilter(event.target.value);
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
              pageIndex={pageIndex}
              pageSize={pageSize}
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
