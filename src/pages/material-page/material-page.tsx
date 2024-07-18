import { useTranslation } from 'react-i18next';

import { useTabSelection } from '@/hooks/use-tab-selection';
import { useMaterialTabs } from '@/hooks/use-material-tabs';

import { Box } from '@mui/material';

import { TabsSection } from '@/shared/tabs-section';

import { Header } from '@/layouts/header';

import { useStyles } from '../styles';

/* eslint-disable import/no-default-export */
export default function MaterialPage(): React.ReactNode {
  const { t } = useTranslation();
  const { classes } = useStyles();

  const { selectedTab, handleChange } = useTabSelection();
  const MATERIAL_TABS = useMaterialTabs();

  return (
    <Box className={classes.wrapper}>
      <Header title={t('global.material')} />
      <TabsSection
        tabs={MATERIAL_TABS}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
    </Box>
  );
}
