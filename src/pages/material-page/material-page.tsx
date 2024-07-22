import { useTranslation } from 'react-i18next';

import { useTabSelection } from '@/hooks/use-tab-selection';

import { Box } from '@mui/material';

import { TabsSection } from '@/shared/tabs-section';

import { Header } from '@/layouts/header';

import { useStyles } from '../styles';

import { getMaterialTabs } from './constants';

/* eslint-disable import/no-default-export */
export default function MaterialPage(): React.ReactNode {
  const { t } = useTranslation();
  const { classes } = useStyles();

  const { selectedTab, handleChange } = useTabSelection();

  return (
    <Box className={classes.wrapper}>
      <Header title={t('material.title')} />
      <TabsSection
        tabs={getMaterialTabs()}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
    </Box>
  );
}
