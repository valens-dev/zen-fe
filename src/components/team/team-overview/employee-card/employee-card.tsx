import type React from 'react';

import { Box, Button, Typography, CircularProgress } from '@mui/material';

import { type IEmployeeCardProps } from './types';

import { useStyles } from './styles';

export function EmployeeCard({
  totalEmployees,
  categories,
}: IEmployeeCardProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.containerBox}>
      <Box>
        <Typography variant="h6" className={classes.title}>
          Employees
        </Typography>
        <Box className={classes.contentContainer}>
          <Box className={classes.circularProgress}>
            <CircularProgress
              variant="determinate"
              value={100}
              size={80}
              thickness={4}
            />
            <Box className={classes.circleLabel}>
              <Typography variant="h5">{totalEmployees}</Typography>
            </Box>
          </Box>
          <Box className={classes.infoContainer}>
            {categories.map((category, index) => {
              return (
                <Box key={index} className={classes.category}>
                  <Box
                    className={classes.dot}
                    style={{ backgroundColor: category.color }}
                  />
                  <Typography variant="body1">{category.name}</Typography>
                  <Typography variant="body2" className={classes.employeeCount}>
                    {category.count} employees
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className={classes.actionsContainer}>
          <Button size="small">View all</Button>
        </Box>
      </Box>
    </Box>
  );
}
