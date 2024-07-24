import { useTranslation } from 'react-i18next';

import {
  Box,
  Select,
  MenuItem,
  Typography,
  PaginationItem,
  type SelectChangeEvent,
  Pagination as BasePagination,
} from '@mui/material';

import PaginationDownIcon from '@/assets/icon/pagination-down.svg?react';
import PaginationLeftIcon from '@/assets/icon/pagination-left.svg?react';
import PaginationRightIcon from '@/assets/icon/pagination-right.svg?react';

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
  totalRows = 0,
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
          IconComponent={PaginationDownIcon}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>

        <Typography>
          {t('pagination.resultsInfo', {
            startRow,
            endRow,
            totalRows,
          })}
        </Typography>
      </Box>

      <BasePagination
        size="medium"
        shape="rounded"
        variant="outlined"
        className={classes.pagination}
        count={totalPages}
        page={pageIndex + 1}
        onChange={onPageChange}
        renderItem={(item) => {
          return (
            <PaginationItem
              slots={{
                previous: PaginationLeftIcon,
                next: PaginationRightIcon,
              }}
              {...item}
            />
          );
        }}
      />
    </Box>
  );
}
