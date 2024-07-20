import { IconStyle } from '@/types/icon';

import IconHome from '@/assets/icon/home.svg?react';
import IconOrder from '@/assets/icon/order.svg?react';
import IconStation from '@/assets/icon/station.svg?react';
import IconMaterial from '@/assets/icon/material.svg?react';
import IconCustomers from '@/assets/icon/customers.svg?react';

interface ISidebarItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconStyle: IconStyle;
  labelKey: string;
  href: string;
  label?: string;
}

export function getSidebarItems(t: (key: string) => string): ISidebarItem[] {
  return [
    {
      icon: IconHome,
      iconStyle: IconStyle.Stroke,
      labelKey: 'home.title',
      href: 'home',
    },
    {
      icon: IconOrder,
      iconStyle: IconStyle.Stroke,
      labelKey: 'order.title',
      href: 'order',
    },
    {
      icon: IconMaterial,
      iconStyle: IconStyle.Stroke,
      labelKey: 'material.title',
      href: 'material',
    },
    {
      icon: IconStation,
      iconStyle: IconStyle.Fill,
      labelKey: 'station.title',
      href: 'station',
    },
    {
      icon: IconCustomers,
      iconStyle: IconStyle.Stroke,
      labelKey: 'customer.title',
      href: 'customers',
    },
  ].map((item) => {
    return {
      ...item,
      label: t(item.labelKey),
    };
  });
}
