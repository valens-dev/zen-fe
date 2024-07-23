import {
  type IValue,
  type IProduct,
  type IMaterial,
  type IAttribute,
  type IMaterialsResponse,
} from '@/types/material';

export function transformMaterialsToProducts(
  materials: IMaterialsResponse,
): IProduct[] {
  return materials.data.map((material: IMaterial) => {
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
      type: material.type,
      name: material.name,
      price: `${material.netPrice}$`,
      weight: `${material.weight}kg`,
    };
  });
}
