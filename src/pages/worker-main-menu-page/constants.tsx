import i18n from 'i18n';

import { WorkerMainMenu } from '@/components/station/worker-main-menu/worker-main-menu';

export function getStationWorkerMainMenuTabs(): {
  id: number;
  label: string;
  component: React.ElementType;
}[] {
  return [
    {
      id: 1,
      label: i18n.t('home.title'),
      component: () => {
        return <WorkerMainMenu title={i18n.t('home.title')} />;
      },
    },
    {
      id: 2,
      label: i18n.t('station.manufacturing'),
      component: () => {
        return <div />;
      },
    },
    {
      id: 3,
      label: i18n.t('station.break'),
      component: () => {
        return <div />;
      },
    },
  ];
}
