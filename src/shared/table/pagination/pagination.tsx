import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const { classes } = useStyles();

  const totalPages = Math.ceil(totalRows / pageSize);
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);

  return (
    <Box className={classes.container}>
      <Box className={classes.selectContainer}>
        <Select
          value={pageSize}
          onChange={onPageSizeChange}
          className={classes.select}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>

        <Typography>
          {startRow} - {endRow} {t('pagination.of')} {totalRows}{' '}
          {t('pagination.results')}
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
