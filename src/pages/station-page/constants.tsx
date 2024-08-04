import i18n from 'i18n';

import { LoginForm } from '@/components/station/station-login-form';
import { StationSequence } from '@/components/station/station-sequence';
import { StationOverview } from '@/components/station/station-overview';
import { stationData } from '@/components/station/station-overview/constants';

export function getStationTabs(): {
  id: number;
  label: string;
  component: React.ElementType;
}[] {
  return [
    {
      id: 1,
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
      id: 2,
      label: i18n.t('station.sequence'),
      component: () => {
        return <StationSequence />;
      },
    },
    {
      id: 3,
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
