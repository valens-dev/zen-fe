import { useTranslation } from 'react-i18next';

import { Product } from '@/components/material/product';
import { PurchasingPart } from '@/components/material/purchasing-part';
import { ManufacturingPart } from '@/components/material/manufacturing-part';

interface ITab {
  label: string;
  component: React.ComponentType;
}

export function MATERIAL_TABS(): ITab[] {
  const { t } = useTranslation();

  return [
    { label: t('material.product'), component: Product },
    { label: t('material.manufacturingPart'), component: ManufacturingPart },
    { label: t('material.purchasingPart'), component: PurchasingPart },
  ];
}
