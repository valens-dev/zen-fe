import { MaterialTable } from '@/components/material/material-table';
import {
  productData,
  purchasingData,
  manufactoringData,
  getMaterialColumns,
} from '@/components/material/material-table/constants';

import { MaterialType } from '@/types/material';

export function getMaterialTabs(
  t: (key: string) => string,
): { label: string; component: React.ElementType }[] {
  return [
    {
      label: t('material.product'),
      component: () => {
        return (
          <MaterialTable
            title={t('material.product')}
            buttonText={t('material.addProduct')}
            columns={getMaterialColumns(t)}
            data={productData}
            materialType={MaterialType.Product}
          />
        );
      },
    },
    {
      label: t('material.manufacturingPart'),
      component: () => {
        return (
          <MaterialTable
            title={t('material.manufacturingPart')}
            buttonText={t('material.addManufacturingPart')}
            columns={getMaterialColumns(t)}
            data={manufactoringData}
            materialType={MaterialType.ManufacturingPart}
          />
        );
      },
    },
    {
      label: t('material.purchasingPart'),
      component: () => {
        return (
          <MaterialTable
            title={t('material.purchasingPart')}
            buttonText={t('material.addPurchasingPart')}
            columns={getMaterialColumns(t)}
            data={purchasingData}
            materialType={MaterialType.PurchasingPart}
          />
        );
      },
    },
  ];
}
