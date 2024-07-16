import {
  Box,
  Select,
  MenuItem,
  Typography,
  type SelectChangeEvent,
  Pagination as BasePagination,
} from '@mui/material';

import { useStyles } from './styles';

interface IPaginationProps {
  pageIndex: number;
  pageSize: number;
  totalRows: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  onPageSizeChange: (event: SelectChangeEvent<number>) => void;
}

export function Pagination({
  pageIndex,
  pageSize,
  totalRows,
  onPageChange,
  onPageSizeChange,
}: IPaginationProps): React.ReactNode {
  const { classes } = useStyles();

  const totalPages = Math.ceil(totalRows / pageSize);
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={classes.container}
    >
      <Box display="flex" alignItems="center" gap="8px">
        <Select value={pageSize} onChange={onPageSizeChange} size="small">
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>

        <Typography>
          {startRow} - {endRow} of {totalRows} results
        </Typography>
      </Box>

      <Box>
        <BasePagination
          size="medium"
          shape="rounded"
          variant="outlined"
          count={totalPages}
          page={pageIndex + 1}
          onChange={onPageChange}
          className={classes.pagination}
        />
      </Box>
    </Box>
  );
}
