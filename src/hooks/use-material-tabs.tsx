import { useTranslation } from 'react-i18next';

import { MaterialTable } from '@/components/material/material-table';
import {
  productData,
  purchasingData,
  manufactoringData,
} from '@/components/material/constants';

import { MaterialType } from '@/types/material';

import { useMaterialColumns } from './use-material-columns';

interface ITab {
  label: string;
  component: () => JSX.Element;
}

export function useMaterialTabs(): ITab[] {
  const { t } = useTranslation();
  const columns = useMaterialColumns();

  const tabs = [
    {
      label: t('material.product'),
      component: function ProductComponent() {
        return (
          <MaterialTable
            title={t('material.product')}
            buttonText={t('material.buttonProduct')}
            columns={columns}
            data={productData}
            materialType={MaterialType.Product}
          />
        );
      },
    },
    {
      label: t('material.manufacturingPart'),
      component: function ManufacturingComponent() {
        return (
          <MaterialTable
            title={t('material.manufacturingPart')}
            buttonText={t('material.buttonManufacturingPart')}
            columns={columns}
            data={manufactoringData}
            materialType={MaterialType.ManufacturingPart}
          />
        );
      },
    },
    {
      label: t('material.purchasingPart'),
      component: function PurchasingComponent() {
        return (
          <MaterialTable
            title={t('material.purchasingPart')}
            buttonText={t('material.buttonPurchasingPart')}
            columns={columns}
            data={purchasingData}
            materialType={MaterialType.PurchasingPart}
          />
        );
      },
    },
  ];

  return tabs;
}
