import i18n from 'i18n';

import { employeeRole } from '@/components/team/team-overview/employee-card/constants';
import { EmployeeCard } from '@/components/team/team-overview/employee-card/employee-card';

export function getTeamTabs(): {
  id: number;
  label: string;
  component: React.ElementType;
}[] {
  const totalEmployees = employeeRole.reduce((acc, category) => {
    return acc + category.count;
  }, 0);
  return [
    {
      id: 1,
      label: i18n.t('team.overview'),
      component: () => {
        return (
          <EmployeeCard
            totalEmployees={totalEmployees}
            categories={employeeRole}
          />
        );
      },
    },
    {
      id: 2,
      label: i18n.t('team.development'),
      component: () => {
        return <div />;
      },
    },
    {
      id: 3,
      label: i18n.t('team.records'),
      component: () => {
        return <div />;
      },
    },
    {
      id: 4,
      label: i18n.t('team.userRights'),
      component: () => {
        return <div />;
      },
    },
  ];
}
