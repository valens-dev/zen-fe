import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@mui/material';

import IconArrowRight from '@/assets/icon/arrow-right.svg?react';
import IconPause from '@/assets/icon/stationBreak_pause.svg?react';
import IconGears from '@/assets/icon/stationManufacturin_gears.svg?react';

import { AnonymousForm } from './anonymous-form';

import { useStyles } from './styles';

export function WorkerMainMenu() {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const subtitle = 'Pleaso do not forget to clean up!';

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.leftBoxes}>
        <Box className={classes.contentWrapper}>
          <Box>
            <IconGears className={classes.theIconGear} />
            {t('station.manufacturing')}
          </Box>
          <IconArrowRight className={classes.theIconArrow} />
        </Box>
        <Box className={classes.contentWrapper}>
          <Box>
            <IconPause />
            {t('station.break')}
          </Box>
          <IconArrowRight className={classes.theIconArrow} />
        </Box>
      </Box>
      <Box className={classes.rightBoxes}>
        <Box className={classes.pinboardWrapper}>
          <Typography fontSize={24}>{t('station.pinboard')}</Typography>
          <Typography>{subtitle}</Typography>
        </Box>
        <Box className={classes.anonymoousWrapper}>
          <Typography fontSize={24}>
            {t('station.anonymousSuggestionForm')}
          </Typography>
          <AnonymousForm
            onSubmit={(data) => {
              // eslint-disable-next-line no-console
              console.log(data);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
