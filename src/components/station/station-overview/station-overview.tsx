import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { Button } from '@/shared/button';

import { SectionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { StationCard } from '../station-card';

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
    navigate('/station/add-production-station');
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
              <StationCard
                imageUrl={station.imageUrl}
                customerName={station.customerName}
                checkIn={station.checkIn}
                workList={station.workList}
                cycleTime={station.cycleTime}
                edited={station.edited}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
