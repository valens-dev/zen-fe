import i18n from 'i18n';

import { IconStyle } from '@/types/icon';

import IconHome from '@/assets/icon/home.svg?react';
import IconOrder from '@/assets/icon/order.svg?react';
import IconStation from '@/assets/icon/station.svg?react';
import IconMaterial from '@/assets/icon/material.svg?react';
import IconCustomers from '@/assets/icon/customers.svg?react';

interface ISidebarItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconStyle: IconStyle;
  label: string;
  href: string;
}

export function getSidebarItems(): ISidebarItem[] {
  return [
    {
      icon: IconHome,
      iconStyle: IconStyle.Stroke,
      label: i18n.t('home.title'),
      href: 'home',
    },
    {
      icon: IconOrder,
      iconStyle: IconStyle.Stroke,
      label: i18n.t('order.title'),
      href: 'order',
    },
    {
      icon: IconMaterial,
      iconStyle: IconStyle.Stroke,
      label: i18n.t('material.title'),
      href: 'material',
    },
    {
      icon: IconStation,
      iconStyle: IconStyle.Fill,
      label: i18n.t('station.title'),
      href: 'station',
    },
    {
      icon: IconCustomers,
      iconStyle: IconStyle.Stroke,
      label: i18n.t('customer.title'),
      href: 'customers',
    },
  ];
}
