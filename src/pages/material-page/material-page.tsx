import { useTabSelection } from '@/hooks/use-tab-selection';

import { Box } from '@mui/material';

import { Header } from '@/shared/header';
import { TabsSection, type ITabSectionProps } from '@/shared/tabs-section';

import { MATERIAL_TABS } from './constants';

import { useStyles } from './styles';

/* eslint-disable import/no-default-export */
export default function MaterialPage(): React.ReactNode {
  const { classes } = useStyles();
  const { selectedTab, handleChange } = useTabSelection();

  const headerProps: ITabSectionProps = {
    tabs: MATERIAL_TABS,
    selectedTab,
    handleChange,
  };

  return (
    <Box className={classes.wrapper}>
      <Header title="Material" />
      <TabsSection {...headerProps} />
    </Box>
  );
}
