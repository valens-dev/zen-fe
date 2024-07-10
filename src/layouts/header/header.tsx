import { Tab, Box, Tabs, Typography } from '@mui/material';

import { useStyles } from './styles';
import { type IHeaderProps } from './types';

export function Header({
  title,
  tabs,
  selectedTab,
  handleChange,
}: IHeaderProps): JSX.Element {
  const { classes } = useStyles();

  return (
    <>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        className={classes.tabs}
      >
        {tabs.map((tab) => {
          return (
            <Tab
              key={`${title}_${tab.label}`}
              label={tab.label}
              classes={{ root: classes.tab, selected: classes.tabSelected }}
            />
          );
        })}
      </Tabs>
      <Box className={classes.line} />
      <Box className={classes.tabContent}>{tabs[selectedTab]?.component}</Box>
    </>
  );
}
