import { IconStyle } from '@/types/icon';

import IconHome from '@/assets/icon/home.svg?react';
import IconOrder from '@/assets/icon/order.svg?react';
import IconStation from '@/assets/icon/station.svg?react';
import IconMaterial from '@/assets/icon/material.svg?react';

export const SIDEBAR_ITEMS = [
  {
    icon: IconHome,
    iconStyle: IconStyle.Stroke,
    label: 'global.home',
    href: 'home',
  },
  {
    icon: IconOrder,
    iconStyle: IconStyle.Stroke,
    label: 'global.order',
    href: 'order',
  },
  {
    icon: IconMaterial,
    iconStyle: IconStyle.Stroke,
    label: 'global.material',
    href: 'material',
  },
  {
    icon: IconStation,
    iconStyle: IconStyle.Fill,
    label: 'global.station',
    href: 'station',
  },
];
