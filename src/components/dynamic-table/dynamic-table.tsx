import { useState } from 'react';

import {
  Box,
  Table,
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
  type SelectChangeEvent,
} from '@mui/material';

import { Pagination } from '../pagination/pagination';

import { useStyles } from './styles';

interface IProductTableProps<T> {
  rows: T[];
  headers: string[];
  fieldMap: Record<string, keyof T>;
  imageField?: keyof T;
}

export function DynamicTable<T>({
  rows,
  headers,
  fieldMap,
  imageField,
}: IProductTableProps<T>): React.ReactNode {
  const { classes } = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  function handleChangePage(_: unknown, newPage: number): void {
    return setPage(newPage);
  }

  function handleChangeRowsPerPage(event: SelectChangeEvent<number>): void {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  }

  return (
    <Box className={classes.container}>
      <TableContainer component={Paper} className={classes.borderRadius}>
        <Table className={classes.borderRadius}>
          <TableHead>
            <TableRow className={classes.headerRow}>
              {headers.map((header) => {
                return (
                  <TableCell key={header} className={classes.headerCell}>
                    {header}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const rowWithImageUrl = row as T & { imageUrl?: string };
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <TableRow key={index} className={classes.bodyRow}>
                    {Object.keys(fieldMap).map((field) => {
                      return (
                        <TableCell key={field} className={classes.bodyCell}>
                          {fieldMap[field] === imageField && row[imageField] ? (
                            <Box className={classes.tableRow}>
                              <img
                                className={classes.image}
                                src={rowWithImageUrl.imageUrl}
                                alt={String(row[fieldMap[field]])}
                                height={24}
                                width={38}
                              />
                              <Typography className={classes.textContainer}>
                                {row[fieldMap[field]] as string}
                              </Typography>
                            </Box>
                          ) : (
                            <>{row[fieldMap[field]] as string}</>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        page={page}
        rowsPerPage={rowsPerPage}
        rowCount={rows.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
