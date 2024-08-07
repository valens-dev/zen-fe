// import type React from 'react';

// import { Box, Divider, Typography, CircularProgress } from '@mui/material';

// import { Button } from '@/shared/button';

// import { type IEmployeeCardProps } from './types';

// import { useStyles } from './styles';

// export function EmployeeCard({
//   totalEmployees,
//   categories,
// }: IEmployeeCardProps): React.ReactNode {
//   const { classes } = useStyles();

//   return (
//     <Box className={classes.containerBox}>
//       <Box className={classes.header}>
//         <Typography className={classes.title}>Employees</Typography>
//         <Button variant="secondary">View all</Button>
//       </Box>
//       <Divider className={classes.divider}/>
//       <Box className={classes.contentContainer}>
//         <Box className={classes.circularProgress}>
//           <CircularProgress
//             variant="determinate"
//             value={100}
//             size={80}
//             thickness={4}
//           />
//           <Box className={classes.circleLabel}>
//             <Typography variant="h5">{totalEmployees}</Typography>
//           </Box>
//         </Box>
//         <Box className={classes.infoContainer}>
//           {categories.map((category) => {
//             return (
//               <Box key={category.id} className={classes.category}>
//                 <Box
//                   className={classes.dot}
//                   style={{ backgroundColor: category.color }}
//                 />
//                 <Typography variant="body1">{category.name}</Typography>
//                 <Typography variant="body2" className={classes.employeeCount}>
//                   {category.count} employees
//                 </Typography>
//               </Box>
//             );
//           })}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

import type React from 'react';

import { Box, Divider, Typography, CircularProgress } from '@mui/material';

import { Button } from '@/shared/button';

import { type IEmployeeCardProps } from './types';

import { useStyles } from './styles';

export function EmployeeCard({
  totalEmployees,
  categories,
}: IEmployeeCardProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.containerBox}>
      <Box className={classes.header}>
        <Typography className={classes.title}>Employees</Typography>
        <Button variant="secondary">View all</Button>
      </Box>
      <Divider className={classes.divider} />
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
          <Box className={classes.category}>
            <Box className={classes.categoryContainer}>
              <Box
                className={classes.dot}
                style={{ backgroundColor: categories[0].color }}
              />
              <Typography variant="body1">{categories[0].name}</Typography>
            </Box>
            <Typography variant="body2" className={classes.employeeCount}>
              {categories[0].count} employees
            </Typography>
          </Box>
          <Box className={classes.category}>
            <Box
              className={classes.dot}
              style={{ backgroundColor: categories[1].color }}
            />
            <Typography variant="body1">{categories[1].name}</Typography>
            <Typography variant="body2" className={classes.employeeCount}>
              {categories[1].count} employees
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
