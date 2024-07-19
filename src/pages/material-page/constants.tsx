import { MaterialTable } from '@/components/materialtable';
import {
  columns,
  productData,
  purchasingData,
  manufactoringData,
} from '@/components/material/material-table/constants';

import { MaterialType } from '@/types/material';

export const MATERIAL_TABS: { label: string; component: React.ElementType }[] =
  [
    {
      label: 'Product',
      component: () => {
        return (
          <MaterialTable
            title="Product"
            buttonText="Add Product"
            columns={columns}
            data={productData}
            materialType={MaterialType.Product}
          />
        );
      },
    },
    {
      label: 'Manufacturing part',
      component: () => {
        return (
          <MaterialTable
            title="Manufacturing part"
            buttonText="Add BOM"
            columns={columns}
            data={manufactoringData}
            materialType={MaterialType.ManufacturingPart}
          />
        );
      },
    },
    {
      label: 'Purchasing part',
      component: () => {
        return (
          <MaterialTable
            title="Purchasing part"
            buttonText="Add Purchased Parts"
            columns={columns}
            data={purchasingData}
            materialType={MaterialType.PurchasingPart}
          />
        );
      },
    },
  ];
