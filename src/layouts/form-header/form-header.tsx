import { type ReactNode } from 'react';

import { Box, Link, Breadcrumbs } from '@mui/material';

import RightIcon from '@/assets/icon/arrow-right.svg?react';

import { useStyles } from './styles';

interface IFormHeaderProps {
  path: string;
  actions: ReactNode;
}

export function FormHeader({
  path,
  actions,
}: IFormHeaderProps): React.ReactNode {
  const { classes } = useStyles();
  const pathArray = path.split(' > ');

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.breadcrumbContainer}>
        <Breadcrumbs
          separator={<RightIcon className={classes.icon} />}
          aria-label="breadcrumb"
        >
          {pathArray.map((crumb, index) => {
            return (
              <Link
                key={crumb}
                color={
                  index === pathArray.length - 1 ? 'textPrimary' : 'inherit'
                }
                className={classes.breadcrumbLink}
              >
                {crumb}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Box>
      <Box className={classes.actions}>{actions}</Box>
    </Box>
  );
}
