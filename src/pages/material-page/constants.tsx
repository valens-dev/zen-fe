import i18n from 'i18n';

import { MaterialTable } from '@/components/material/material-table';
import {
  productData,
  purchasingData,
  manufactoringData,
  getMaterialColumns,
} from '@/components/material/material-table/constants';

import { MaterialType } from '@/types/material';

export function getMaterialTabs(): {
  label: string;
  component: React.ElementType;
}[] {
  return [
    {
      label: i18n.t('material.product'),
      component: () => {
        return (
          <MaterialTable
            title={i18n.t('material.product')}
            buttonText={i18n.t('material.addProduct')}
            columns={getMaterialColumns()}
            data={productData}
            materialType={MaterialType.Product}
          />
        );
      },
    },
    {
      label: i18n.t('material.manufacturingPart'),
      component: () => {
        return (
          <MaterialTable
            title={i18n.t('material.manufacturingPart')}
            buttonText={i18n.t('material.addManufacturingPart')}
            columns={getMaterialColumns()}
            data={manufactoringData}
            materialType={MaterialType.ManufacturingPart}
          />
        );
      },
    },
    {
      label: i18n.t('material.purchasingPart'),
      component: () => {
        return (
          <MaterialTable
            title={i18n.t('material.purchasingPart')}
            buttonText={i18n.t('material.addPurchasingPart')}
            columns={getMaterialColumns()}
            data={purchasingData}
            materialType={MaterialType.PurchasingPart}
          />
        );
      },
    },
  ];
}
