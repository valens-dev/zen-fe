import { useNavigate } from 'react-router-dom';

import { CustomTable } from '@/components/custom-table/custom-table';

import {
  columns,
  productData,
  purchasingData,
  manufactoringData,
} from '@/pages/material-page/constants';

import { MaterialType } from '@/types/material';

interface ITab {
  label: string;
  component: React.ComponentType;
}

export function useMaterialTabs(): ITab[] {
  const navigate = useNavigate();

  function handleOpenAddPage(materialType: MaterialType): void {
    navigate('/material/add-material', { state: { materialType } });
  }

  return [
    {
      label: 'Product',
      component: () => {
        return (
          <CustomTable
            title="Product"
            buttonText="Add Product"
            columns={columns}
            data={productData}
            onClick={() => {
              return handleOpenAddPage(MaterialType.Product);
            }}
          />
        );
      },
    },
    {
      label: 'Manufacturing part',
      component: () => {
        return (
          <CustomTable
            title="Manufacturing part"
            buttonText="Add BOM"
            columns={columns}
            data={manufactoringData}
            onClick={() => {
              return handleOpenAddPage(MaterialType.ManufacturingPart);
            }}
          />
        );
      },
    },
    {
      label: 'Purchasing part',
      component: () => {
        return (
          <CustomTable
            title="Purchasing part"
            buttonText="Add Purchased Parts"
            columns={columns}
            data={purchasingData}
            onClick={() => {
              return handleOpenAddPage(MaterialType.PurchasingPart);
            }}
          />
        );
      },
    },
  ];
}
