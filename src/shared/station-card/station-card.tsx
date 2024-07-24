import type React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@mui/material';

import { LazyImage } from '../lazy-image';

import { useStyles } from './styles';

interface IStationCardData {
  imageUrl: string;
  customerName: string;
  checkIn: string;
  workList: number;
  cycleTime: string;
  edited: number;
}

interface IStationCardProps {
  data: IStationCardData;
}

export function StationCard({ data }: IStationCardProps): React.ReactNode {
  const { imageUrl, customerName, checkIn, workList, cycleTime, edited } = data;
  const { t } = useTranslation();
  const { classes } = useStyles();

  return (
    <Box className={classes.containerBox}>
      <Box className={classes.baseBox}>
        <Typography className={classes.headerRow}>
          {t('station.stationCard.title')}
        </Typography>
        <Box className={classes.contentContainer}>
          <Box className={classes.imageContainer}>
            <LazyImage
              alt={customerName}
              src={imageUrl}
              className={classes.image}
            />
            <Typography variant="subtitle1" className={classes.customerName}>
              {customerName}
            </Typography>
          </Box>
          <Box className={classes.infoContainer}>
            <Box className={classes.box}>
              <Typography variant="subtitle2" className={classes.boxHeader}>
                {t('station.stationCard.checkIn')}
              </Typography>
              <Typography variant="body1" className={classes.boxValue}>
                {checkIn}
              </Typography>
            </Box>
            <Box className={classes.box}>
              <Typography variant="subtitle2" className={classes.boxHeader}>
                {t('station.stationCard.workList')}
              </Typography>
              <Typography variant="body1" className={classes.workList}>
                {workList}
              </Typography>
            </Box>
            <Box className={classes.box}>
              <Typography variant="subtitle2" className={classes.boxHeader}>
                {t('station.stationCard.cycleTime')}
              </Typography>
              <Typography variant="body1" className={classes.boxValue}>
                {cycleTime}
              </Typography>
            </Box>
            <Box className={classes.box}>
              <Typography variant="subtitle2" className={classes.boxHeader}>
                {t('station.stationCard.edited')}
              </Typography>
              <Typography variant="body1" className={classes.edited}>
                {edited}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
