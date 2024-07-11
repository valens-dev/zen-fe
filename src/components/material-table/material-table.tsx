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
}

export function MaterialTable({ rows }: IProductTableProps): React.ReactNode {
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

  const headers = [
    'Name',
    'Höhe',
    'Material',
    'Gewicht',
    'Bestand',
    'Netto Preis',
  ];

  const fieldMap: Record<string, keyof ProductData> = {
    height: 'height',
    material: 'material',
    weight: 'weight',
    stock: 'stock',
    price: 'price',
  };

  return (
    <Box className={classes.container}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.headerRow}>
              {headers.map((header, index) => {
                return (
                  <TableCell
                    key={header}
                    className={`${classes.headerCell} ${index === 0 ? classes.nameCell : classes.otherCell}`}
                  >
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
                    <TableCell
                      className={`${classes.bodyCell} ${classes.nameCell}`}
                    >
                      <Box className={classes.tableRow}>
                        <img
                          className={classes.image}
                          src={row.imageUrl}
                          alt={row.name}
                          height={24}
                          width={38}
                        />
                        <Typography className={classes.textContainer}>
                          {row.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    {Object.keys(fieldMap).map((field) => {
                      return (
                        <TableCell
                          key={field}
                          className={`${classes.bodyCell} ${classes.otherCell}`}
                        >
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
