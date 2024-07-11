import { createElement } from 'react';

import { Tab, Box, Tabs, Typography } from '@mui/material';

import { type ITabSectionProps } from './types';

import { useStyles } from './styles';

export function TabsSection({
  title,
  tabs,
  selectedTab,
  handleChange,
}: ITabSectionProps): React.ReactElement {
  const { classes } = useStyles();

  return (
    <>
      <Typography className={classes.title}>{title}</Typography>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        className={classes.tabs}
      >
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.label}
              label={tab.label}
              classes={{ root: classes.tab, selected: classes.tabSelected }}
            />
          );
        })}
      </Tabs>
      <Box className={classes.line} />
      <Box className={classes.tabContent}>
        {tabs[selectedTab]?.component
          ? createElement(tabs[selectedTab].component)
          : undefined}
      </Box>
    </>
  );
}
