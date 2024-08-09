import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { EmployeeTable } from '@/components/team/team-overview/employee-table';

import { Header } from '@/layouts/header';

import { useStyles } from '../styles';

/* eslint-disable import/no-default-export */
export default function ViewEmployeesPage(): React.ReactNode {
  const { t } = useTranslation();
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Header title={t('team.employeeTable.title')} />
      <EmployeeTable />
    </Box>
  );
}
