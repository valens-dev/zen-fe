import { useOrderTabs } from '@/hooks/use-order-tabs';
import { useTabSelection } from '@/hooks/use-tab-selection';

import { Box } from '@mui/material';

import { TabsSection } from '@/shared/tabs-section';

import { Header } from '@/layouts/header';

import { useStyles } from './styles';

/* eslint-disable import/no-default-export */
export default function OrderPage(): React.ReactNode {
  const { classes } = useStyles();
  const ORDER_TABS = useOrderTabs();

  const { selectedTab, handleChange } = useTabSelection();

  return (
    <Box className={classes.wrapper}>
      <Header title="Order" />
      <TabsSection
        tabs={ORDER_TABS}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
    </Box>
  );
}
