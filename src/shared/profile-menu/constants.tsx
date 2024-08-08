import { type CSSProperties } from 'react';

import i18n from 'i18n';

import IconUser from '@/assets/icon/profile.svg?react';
import IconLogour from '@/assets/icon/logout.svg?react';

export interface IMenuItemType {
  id: number;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  style?: CSSProperties;
}

export function getUserMenuItems(
  handleClose: () => void,
  navigateBack: () => void,
): IMenuItemType[] {
  return [
    {
      id: 1,
      label: i18n.t('profile.view'),
      icon: <IconUser style={{ marginRight: '10px' }} />,
      onClick: handleClose,
    },
    {
      id: 2,
      label: i18n.t('profile.logOut'),
      icon: <IconLogour style={{ marginRight: '10px', color: '#e53e3e' }} />,
      onClick: navigateBack,
      style: { color: '#e53e3e' },
    },
  ];
}
