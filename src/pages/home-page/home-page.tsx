import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { Header } from '@/layouts/header';

import { useStyles } from '../styles';

/* eslint-disable import/no-default-export */
export default function HomePage(): React.ReactNode {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.wrapper}>
      <Header title={t('global.home')} />
    </Box>
  );
}
