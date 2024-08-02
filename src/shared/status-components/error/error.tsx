import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@mui/material';

import { useStyles } from '../style';

export function Error(): React.ReactNode {
  const { t } = useTranslation();
  const { classes } = useStyles();

  return (
    <Box className={classes.loadingContainer}>
      <Typography className={classes.errorText}>
        {t('message.missingData')}
      </Typography>
    </Box>
  );
}
