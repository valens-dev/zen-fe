import i18n from 'i18n';

import { Typography } from '@mui/material';

import { LoginForm } from '@/components/station/station-login-form';
import { StationOverview } from '@/components/station/station-overview';
import { stationData } from '@/components/station/station-overview/constants';

export function getStationTabs(): {
  label: string;
  component: React.ElementType;
}[] {
  return [
    {
      label: i18n.t('station.overview'),
      component: () => {
        return (
          <StationOverview
            title={i18n.t('station.overview')}
            buttonText={i18n.t('station.addProductionStation')}
            data={stationData}
          />
        );
      },
    },
    {
      label: i18n.t('station.sequence'),
      component: () => {
        return <Typography>{i18n.t('station.sequence')}</Typography>;
      },
    },
    {
      label: i18n.t('station.stationLogin'),
      component: () => {
        return (
          <LoginForm
            onSubmit={(data) => {
              // eslint-disable-next-line no-console
              console.log(data);
            }}
          />
        );
      },
    },
  ];
}
