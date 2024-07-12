import { useTabSelection } from '@/hooks/use-tab-selection';

import { Box } from '@mui/material';

import { Header } from '@/shared/header';
import { TabsSection } from '@/shared/tabs-section';

import { MATERIAL_TABS } from './constants';

import { useStyles } from './styles';

/* eslint-disable import/no-default-export */
export default function MaterialPage(): React.ReactNode {
  const { classes } = useStyles();
  const { selectedTab, handleChange } = useTabSelection();

  return (
    <Box className={classes.wrapper}>
      <Header title="Material" />
      <TabsSection
        tabs={MATERIAL_TABS}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
    </Box>
  );
}
