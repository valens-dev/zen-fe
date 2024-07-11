import { Tab, Box, Tabs } from '@mui/material';

import { useStyles } from './styles';

export interface ITabSectionProps {
  tabs: { label: string; component: React.ElementType }[];
  selectedTab: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export function TabsSection({
  tabs,
  selectedTab,
  handleChange,
}: ITabSectionProps): React.ReactElement {
  const { classes } = useStyles();

  const ActiveTabComponent = tabs[selectedTab].component;

  return (
    <>
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
        <ActiveTabComponent />
      </Box>
    </>
  );
}
