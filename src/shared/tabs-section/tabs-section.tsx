import { Tab, Box, Tabs } from '@mui/material';

import { useStyles } from './styles';

interface ITabSectionProps {
  tabs: {
    id: number;
    label: string | React.ReactNode;
    component: React.ElementType;
  }[];
  selectedTab: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export function TabsSection({
  tabs,
  selectedTab,
  handleChange,
}: ITabSectionProps): React.ReactNode {
  const { classes } = useStyles();

  const ActiveTabComponent = tabs[selectedTab].component;

  return (
    <Box className={classes.wrapper}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        className={classes.tabs}
        TabIndicatorProps={{ className: classes.tabIndicator }}
      >
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.id}
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
    </Box>
  );
}
