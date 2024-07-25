import {
  type IValue,
  type IMaterial,
  type IAttribute,
  type MaterialType,
} from '@/types/material';

import { type IProduct } from '../../components/material/material-table/types';

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
      imageUrl: material.image,
      height: heightFormatted,
      material: materialValue,
      stock: 'In progress',
      materialType: material.type as MaterialType,
      name: material.name,
      price: `${material.netPrice}$`,
      weight: `${material.weight}kg`,
    };
  });
}
