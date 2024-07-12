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

import { type ProductData } from '../material/data';
import { Pagination } from '../pagination/pagination';

import { useStyles } from './styles';

interface IProductTableProps {
  rows: ProductData[];
  headers: string[];
  fieldMap: Record<string, keyof ProductData>;
  imageField?: keyof ProductData;
}

export function DynamicTable({
  rows,
  headers,
  fieldMap,
  imageField,
}: IProductTableProps): React.ReactNode {
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
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
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
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <TableRow key={index} className={classes.bodyRow}>
                    {Object.keys(fieldMap).map((field) => {
                      return fieldMap[field] === imageField && row.imageUrl ? (
                        <TableCell key={field} className={classes.bodyCell}>
                          <Box className={classes.tableRow}>
                            <img
                              className={classes.image}
                              src={row.imageUrl}
                              alt={String(row[fieldMap[field]])}
                              height={24}
                              width={38}
                            />
                            <Typography className={classes.textContainer}>
                              {row[fieldMap[field]]}
                            </Typography>
                          </Box>
                        </TableCell>
                      ) : (
                        <TableCell key={field} className={classes.bodyCell}>
                          {row[fieldMap[field]]}
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
