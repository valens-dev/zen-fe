import { type IFormData } from '@/components/material/material-form/types';

import {
  type IComponent,
  type IGetMaterialById,
  type IComponentDetails,
} from '@/types/material';

export function createInitialValues(materialData: IGetMaterialById): IFormData {
  const { materialDto, materialParts } = materialData;

  return {
    id: materialDto.id,
    name: materialDto.name,
    type: materialDto.type,
    values: materialDto.values,
    attributes: materialDto.attributes,
    weight: materialDto.weight,
    materialNumber: materialDto.materialNumber,
    netPrice: materialDto.netPrice,
    VAT: materialDto.VAT,
    customsTarif: materialDto.customsTarif,
    description: materialDto.description,
    image: materialDto.image,
    packaging: materialDto.packaging,
    parts: materialParts.map(
      ({ quantity, part }: IComponentDetails): IComponent => {
        const { material } = part;
        return {
          id: material.id,
          quantity,
          unitType: 'Stk',
          name: material.name,
          imageUrl: material.image,
          duration: 2,
          type: material.type,
          manufacturingParts: material?.manufacturingPart,
          purchasingParts: material?.purchasingPart,
        };
      },
    ),
  };
}
