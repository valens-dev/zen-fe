import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { TabsSection } from '@/shared/tabs-section';

import { Header } from '@/layouts/header';

import { useTabSelection } from '@/hooks/use-tab-selection';

import { useStyles } from '../styles';

import { getTeamTabs } from './constants';

/* eslint-disable import/no-default-export */
export default function TeamPage(): React.ReactNode {
  const { t } = useTranslation();
  const { classes } = useStyles();

  const { selectedTab, handleChange } = useTabSelection();

  return (
    <Box className={classes.wrapper}>
      <Header title={t('team.title')} />
      <TabsSection
        tabs={getTeamTabs()}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
    </Box>
  );
}
