import { useTranslation } from 'react-i18next';

import { useTabSelection } from '@/hooks/use-tab-selection';

import { Box } from '@mui/material';

import { TabsSection } from '@/shared/tabs-section';

import { Header } from '@/layouts/header';

import { useStyles } from '../styles';

import { MATERIAL_TABS } from './constants';

/* eslint-disable import/no-default-export */
export default function MaterialPage(): React.ReactNode {
  const { classes } = useStyles();
  const { selectedTab, handleChange } = useTabSelection();
  const { t } = useTranslation();
  const materialTabs = MATERIAL_TABS();

  return (
    <Box className={classes.wrapper}>
      <Header title={t('global.material')} />
      <TabsSection
        tabs={materialTabs}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
    </Box>
  );
}
