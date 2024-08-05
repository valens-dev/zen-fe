import { type IProduct } from '@/components/material/material-table/types';

import {
  type IValue,
  MaterialType,
  type IMaterial,
  type IComponent,
  type IAttribute,
  type IProductData,
} from '@/types/material';

export function transformMaterialsToProducts(
  materials?: IMaterial[],
): IProduct[] {
  if (!materials) {
    return [];
  }
  return materials.map((material: IMaterial) => {
    const heightValue = material.values.find((value: IValue) => {
      return value.name === 'Height';
    });
    const heightFormatted = heightValue
      ? `${heightValue.value} ${heightValue.unit}`
      : '';

    const materialValue =
      material.attributes.find((attribute: IAttribute) => {
        return attribute.name === 'material';
      })?.option ?? '';

    return {
      id: material.id,
      imageUrl: material.image,
      height: heightFormatted,
      material: materialValue,
      stock: 'In progress',
      materialType: material.type,
      name: material.name,
      netPrice: material.netPrice.toString(),
      weight: `${material.weight}kg`,
      manufacturingPart: material.manufacturingPart,
      purchasingPart: material.purchasingPart,
      product: material.product,
      type: material.type,
    };
  });
}

export function categorizeParts(parts: IComponent[]): {
  manufacturingParts: IProductData[];
  purchasingParts: IProductData[];
} {
  const manufacturingParts: IProductData[] = parts
    .filter((part) => {
      return part.type === MaterialType.ManufacturingPart;
    })
    .map((part) => {
      return {
        id: part?.manufacturingParts?.id,
        quantity: part.quantity,
      };
    });

  const purchasingParts: IProductData[] = parts
    .filter((part) => {
      return part.type === MaterialType.PurchasingPart;
    })
    .map((part) => {
      return {
        id: part?.purchasingParts?.id,
        quantity: part.quantity,
      };
    });

  return { manufacturingParts, purchasingParts };
}
