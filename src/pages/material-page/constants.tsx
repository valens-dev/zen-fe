import { MaterialTable } from '@/components/material-table';
import {
  productRows,
  purchasingRows,
  materialFieldMap,
  materialTableHeaders,
} from '@/components/material-table/constants';

export enum MaterialType {
  Product = 'product',
  Manufacturing = 'manufacturing-part',
  Purchasing = 'purchasing-part',
}

export const MATERIAL_TABS: { label: string; component: React.ElementType }[] =
  [
    {
      label: 'Product',
      component: () => {
        return (
          <MaterialTable
            title="Product"
            buttonText="Add Product"
            rows={productRows}
            headers={materialTableHeaders}
            fieldMap={materialFieldMap}
            imageField="name"
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
            rows={productRows}
            headers={materialTableHeaders}
            fieldMap={materialFieldMap}
            imageField="name"
            materialType={MaterialType.Manufacturing}
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
            rows={purchasingRows}
            headers={materialTableHeaders}
            fieldMap={materialFieldMap}
            imageField="name"
            materialType={MaterialType.Purchasing}
          />
        );
      },
    },
  ];
