import { useTranslation } from 'react-i18next';

import { useTabSelection } from '@/hooks/use-tab-selection';

import { Box } from '@mui/material';

import { TabsSection } from '@/shared/tabs-section';

import { Header } from '@/layouts/header';

import { useStyles } from '../styles';

import { getOrderTabs } from './constants';

/* eslint-disable import/no-default-export */
export default function OrderPage(): React.ReactNode {
  const { t } = useTranslation();
  const { classes } = useStyles();

  const { selectedTab, handleChange } = useTabSelection();

  return (
    <Box className={classes.wrapper}>
      <Header title={t('order.title')} />
      <TabsSection
        tabs={getOrderTabs()}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
    </Box>
  );
}
