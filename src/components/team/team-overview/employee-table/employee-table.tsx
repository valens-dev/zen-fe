import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SectionHeader } from '@/layouts/section-header';

import { useTableFilters } from '@/hooks/use-table-filters';

import ExportIcon from '@/assets/icon/export.svg?react';

import { employeeData, getEmployeeColumns } from './constants';

import { useStyles } from './styles';

export function EmployeeTable(): React.ReactNode {
  const { classes } = useStyles();
  const { globalFilter, setGlobalFilter, pagination, setPagination } =
    useTableFilters();

  return (
    <Box className={classes.wrapper}>
      <SectionHeader
        actions={
          <Button variant="secondary" startIcon={<ExportIcon />}>
            Export
          </Button>
        }
      />
      <Table
        columns={getEmployeeColumns()}
        data={employeeData}
        totalCount={2}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Box>
  );
}
