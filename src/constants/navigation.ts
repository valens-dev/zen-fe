import IconHome from '@/assets/icon/home.svg?react';
import IconMaterial from '@/assets/icon/material.svg?react';
import IconStation from '@/assets/icon/station.svg?react';
import { IconStyle } from '@/types/icon-style';

export const NAV_LINKS = [
  { icon: IconHome, iconStyle: IconStyle.Stroke, label: 'Home', href: 'home' },
  { icon: IconMaterial, iconStyle: IconStyle.Stroke, label: 'Material', href: 'material' },
  { icon: IconStation, iconStyle: IconStyle.Fill, label: 'Station', href: 'station' },
];
