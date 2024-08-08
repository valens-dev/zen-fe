import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { TabsSection } from '@/shared/tabs-section';

import { Header } from '@/layouts/header';

import { useTabSelection } from '@/hooks/use-tab-selection';

import { useStyles } from '../styles';

import { getStationWorkerMainMenuTabs } from './constants';

/* eslint-disable import/no-default-export */
export default function WorkerMainMenuPage(): React.ReactNode {
  const { classes } = useStyles();
  const { selectedTab, handleChange } = useTabSelection();
  const { t } = useTranslation();

  return (
    <Box
      className={classes.wrapper}
      sx={{
        '& > div': {
          '& > div': {
            '& > div': {
              // width: '50%',
              left: '30%',
            },
          },
        },
      }}
    >
      <Header title={t('home.title')} />
      <TabsSection
        tabs={getStationWorkerMainMenuTabs()}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
      {/* <WorkerMainMenu /> */}
    </Box>
  );
}
