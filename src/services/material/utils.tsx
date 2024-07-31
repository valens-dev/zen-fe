import { type IProduct } from '@/components/material/material-table/types';

import { type IValue, type IMaterial, type IAttribute } from '@/types/material';

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
      price: `${material.netPrice}$`,
      weight: `${material.weight}kg`,
      manufacturingPart: material.manufacturingPart,
      purchasingPart: material.purchasingPart,
      product: material.product,
      type: material.type,
    };
  });
}
