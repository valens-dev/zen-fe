import { Box, Button, Typography } from '@mui/material';

import { DonutChart } from './donut-chart';

import { type IEmployeeCardProps } from './types';

import { useStyles } from './styles';

export function EmployeeCard({
  totalEmployees,
  categories,
}: IEmployeeCardProps): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.containerBox}>
      <Box className={classes.header}>
        <Typography className={classes.title}>Employees</Typography>
        <Button className={classes.button}>
          <Typography className={classes.buttonText}>View all</Typography>
        </Button>
      </Box>
      <Box className={classes.contentContainer}>
        <DonutChart totalEmployees={totalEmployees} categories={categories} />
        <Box className={classes.infoContainer}>
          {categories.map((category) => {
            return (
              <Box key={category.id} className={classes.category}>
                <Box className={classes.categoryContainer}>
                  <Box
                    className={classes.dot}
                    style={{ backgroundColor: category.color }}
                  />
                  <Typography className={classes.employeeRole}>
                    {category.name}
                  </Typography>
                </Box>
                <Box className={classes.text}>
                  <Typography className={classes.employeeCount}>
                    {category.count}
                  </Typography>
                  <Typography className={classes.employeeText}>
                    employees
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
