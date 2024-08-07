import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

import { type IEmployeeCategory, type IEmployeeCardProps } from './types';

import { useStyles } from './styles';

const pieParams = { height: 300, margin: { right: 5 } };

function generatePieData(
  categories: IEmployeeCategory[],
): { value: number; color: string }[] {
  return categories.map((category) => {
    return {
      value: category.count,
      color: category.color,
    };
  });
}

export function DonutChart({
  totalEmployees,
  categories,
}: IEmployeeCardProps): React.ReactNode {
  const { classes } = useStyles();

  const pieData = useMemo(() => {
    return generatePieData(categories);
  }, [categories]);

  return (
    <Stack className={classes.stack}>
      <Box className={classes.chartBox}>
        <PieChart
          series={[
            {
              data: pieData,
              innerRadius: 80,
              outerRadius: 100,
              paddingAngle: 0,
              cornerRadius: 0,
              startAngle: 0,
              endAngle: 360,
              cx: 150,
              cy: 100,
            },
          ]}
          {...pieParams}
        />
        <Box className={classes.textBox}>
          <Typography className={classes.chartCount}>
            {totalEmployees}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
