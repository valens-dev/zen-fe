import type React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { Button } from '@/shared/button';
import { StationCard } from '@/shared/station-card';

import { SectionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { type IStation } from './types';

import { useStyles } from './styles';

interface IStationOverviewProps {
  title: string;
  buttonText: string;
  data: IStation[];
}

export function StationOverview({
  title,
  buttonText,
  data,
}: IStationOverviewProps): React.ReactNode {
  const navigate = useNavigate();
  const { classes } = useStyles();

  function handleOpenAddPage(): void {
    navigate('/order/add-order');
  }

  return (
    <Box>
      <SectionHeader
        title={title}
        actions={
          <Button onClick={handleOpenAddPage} startIcon={<AddIcon />}>
            {buttonText}
          </Button>
        }
      />
      <Box className={classes.cardsContainer}>
        {data.map((station) => {
          return (
            <Box key={station.id} className={classes.stationWrapper}>
              <StationCard data={station} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
