import { publicInstance } from '../instances';
import { type IMaterial, type ProductType } from '../types/material';

const baseUrl = '/api';

async function fetchMaterial(productType: ProductType): Promise<IMaterial> {
  const response = await publicInstance.get<IMaterial>(
    `${baseUrl}/material?type=${productType}`,
  );

  return response.data;
}

export { fetchMaterial };
