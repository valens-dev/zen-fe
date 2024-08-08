import { Box } from '@mui/material';

import { WorkerMainMenuTabsSection } from '@/shared/worker-main-menu-tabs-section-header';

import { useTabSelection } from '@/hooks/use-tab-selection';

import { useStyles } from '../styles';

import { getStationWorkerMainMenuTabs } from './constants';

/* eslint-disable import/no-default-export */
export default function WorkerMainMenuPage(): React.ReactNode {
  const { classes } = useStyles();
  const { selectedTab, handleChange } = useTabSelection();

  return (
    <Box className={classes.wrapper}>
      <WorkerMainMenuTabsSection
        tabs={getStationWorkerMainMenuTabs()}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
    </Box>
  );
}
