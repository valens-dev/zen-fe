import {
  Box,
  Select,
  MenuItem,
  Typography,
  IconButton,
  type SelectChangeEvent,
} from '@mui/material';

import IconLeft from '@/assets/icon/pagination-left.svg?react';
import IconRight from '@/assets/icon/pagination-right.svg?react';

import { useStyles } from './styles';

interface IPaginationProps {
  page: number;
  rowsPerPage: number;
  rowCount: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: SelectChangeEvent<number>) => void;
}

export function Pagination({
  page,
  rowsPerPage,
  rowCount,
  onPageChange,
  onRowsPerPageChange,
}: IPaginationProps): React.ReactNode {
  const { classes } = useStyles();
  const numPages = Math.ceil(rowCount / rowsPerPage);
  const startPage = Math.max(0, Math.min(numPages - 5, page - 2));
  const endPage = Math.min(numPages, startPage + 5);

  return (
    <Box className={classes.container}>
      <Box className={classes.selectContainer}>
        <Select
          value={rowsPerPage}
          onChange={onRowsPerPageChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Rows per page' }}
          className={classes.paginationSelect}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <Typography className={classes.paginationTypography}>
          {`${page * rowsPerPage + 1} - ${Math.min((page + 1) * rowsPerPage, rowCount)} of ${rowCount} results`}
        </Typography>
      </Box>
      <Box className={classes.pagginationButtonsContainer}>
        <IconButton
          className={classes.pagginationButton}
          onClick={(event) => {
            return onPageChange(event, page - 1);
          }}
          disabled={page === 0}
        >
          <IconLeft />
        </IconButton>
        {Array.from({ length: endPage - startPage }, (_, i) => {
          return startPage + i;
        }).map((p) => {
          return (
            <Box
              key={p}
              onClick={(event) => {
                return onPageChange(event, p);
              }}
              className={`${classes.paginationBox} ${p === page ? classes.paginationActive : classes.paginationInactive}`}
            >
              <Typography>{p + 1}</Typography>
            </Box>
          );
        })}
        <IconButton
          className={classes.pagginationButton}
          onClick={(event) => {
            return onPageChange(event, page + 1);
          }}
          disabled={page >= numPages - 1}
        >
          <IconRight />
        </IconButton>
      </Box>
    </Box>
  );
}
