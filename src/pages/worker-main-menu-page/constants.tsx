// import i18n from 'i18n';

import { WorkerMainMenu } from '@/components/station/worker-main-menu/worker-main-menu';

export function getStationWorkerMainMenuTabs(): {
  id: number;
  label: string;
  component: React.ElementType;
}[] {
  return [
    {
      id: 1,
      // label: i18n.t('team.development'),
      label: 'Home',
      component: () => {
        return <WorkerMainMenu />;
      },
    },
    {
      id: 2,
      label: 'Station Manufacturing',
      component: () => {
        return <div />;
      },
    },
    {
      id: 3,
      label: 'Break',
      component: () => {
        return <div />;
      },
    },
  ];
}
