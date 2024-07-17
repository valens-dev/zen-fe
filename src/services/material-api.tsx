import { type IMaterial, type ProductType } from '@/types/material';

import { publicInstance } from './instances';

const baseUrl = '/material';

async function getByType(productType: ProductType): Promise<IMaterial> {
  const response = await publicInstance.get<IMaterial>(
    `${baseUrl}?type=${productType}`,
  );

  return response.data;
}

const MaterialAPI = {
  getByType,
};

export { MaterialAPI };
