import { type IFormData } from '@/components/material/material-form/types';

import {
  type IComponent,
  type IGetMaterialById,
  type IComponentDetails,
} from '@/types/material';

export function createInitialValues(materialData: IGetMaterialById): IFormData {
  return {
    id: materialData.materialDto.id,
    name: materialData.materialDto.name,
    type: materialData.materialDto.type,
    values: materialData.materialDto.values,
    attributes: materialData.materialDto.attributes,
    weight: materialData.materialDto.weight,
    materialNumber: materialData.materialDto.materialNumber,
    netPrice: materialData.materialDto.netPrice,
    VAT: materialData.materialDto.VAT,
    customsTarif: materialData.materialDto.customsTarif,
    description: materialData.materialDto.description,
    image: materialData.materialDto.image,
    packaging: materialData.materialDto.packaging,
    parts: materialData.materialParts.map(
      (part: IComponentDetails): IComponent => {
        return {
          id: part.material.id,
          quantity: part.material.quantity,
          unitType: 'Stk',
          name: part.material.name,
          imageUrl: part.material.image,
          duration: 2,
          type: part.material.type,
          manufacturingParts: part.material?.manufacturingPart,
          purchasingParts: part.material?.purchasingPart,
        };
      },
    ),
  };
}
