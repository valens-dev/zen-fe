import { IconStyle } from '@/types/icon';

import IconHome from '@/assets/icon/home.svg?react';
import IconOrder from '@/assets/icon/order.svg?react';
import IconStation from '@/assets/icon/station.svg?react';
import IconMaterial from '@/assets/icon/material.svg?react';

export const NAV_LINKS = [
  { icon: IconHome, iconStyle: IconStyle.Stroke, label: 'Home', href: 'home' },
  {
    icon: IconOrder,
    iconStyle: IconStyle.Stroke,
    label: 'Order',
    href: 'order',
  },
  {
    icon: IconMaterial,
    iconStyle: IconStyle.Stroke,
    label: 'Material',
    href: 'material',
  },
  {
    icon: IconStation,
    iconStyle: IconStyle.Fill,
    label: 'Station',
    href: 'station',
  },
];
