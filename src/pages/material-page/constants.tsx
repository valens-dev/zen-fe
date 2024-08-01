import i18n from 'i18n';

import { MaterialTable } from '@/components/material/material-table';
import { getMaterialColumns } from '@/components/material/material-table/constants';

import { MaterialType } from '@/types/material';

export function getMaterialTabs(): {
  id: number;
  label: string;
  component: React.ElementType;
}[] {
  return [
    {
      id: 1,
      label: i18n.t('material.product'),
      component: () => {
        return (
          <MaterialTable
            title={i18n.t('material.product')}
            buttonText={i18n.t('material.addProduct')}
            columns={getMaterialColumns()}
            materialType={MaterialType.Product}
          />
        );
      },
    },
    {
      id: 2,
      label: i18n.t('material.manufacturingPart'),
      component: () => {
        return (
          <MaterialTable
            title={i18n.t('material.manufacturingPart')}
            buttonText={i18n.t('material.addManufacturingPart')}
            columns={getMaterialColumns()}
            materialType={MaterialType.ManufacturingPart}
          />
        );
      },
    },
    {
      id: 3,
      label: i18n.t('material.purchasingPart'),
      component: () => {
        return (
          <MaterialTable
            title={i18n.t('material.purchasingPart')}
            buttonText={i18n.t('material.addPurchasingPart')}
            columns={getMaterialColumns()}
            materialType={MaterialType.PurchasingPart}
          />
        );
      },
    },
  ];
}
