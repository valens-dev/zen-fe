import { useTabSelection } from '@/hooks/use-tab-selection';

import { Box } from '@mui/material';

import { TabsSection } from '@/layouts/tabs-section/tabs-section';
import { type ITabSectionProps } from '@/layouts/tabs-section/types';

import { MATERIAL_TABS } from '@/constants/material-tabs';

import { useStyles } from './styles';

/* eslint-disable import/no-default-export */
export default function MaterialPage(): React.ReactNode {
  const { classes } = useStyles();
  const { selectedTab, handleChange } = useTabSelection();

  const headerProps: ITabSectionProps = {
    title: 'Material',
    tabs: MATERIAL_TABS,
    selectedTab,
    handleChange,
  };

  return (
    <Box className={classes.wrapper}>
      <TabsSection {...headerProps} />
    </Box>
  );
}
