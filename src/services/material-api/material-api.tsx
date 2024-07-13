import axios from 'axios';

import { type IMaterial } from '../types/material';
import { type ProductTypeEnum } from '../enums/product-type';

const baseUrl = '/api';

async function fetchMaterial(productType: ProductTypeEnum): Promise<IMaterial> {
  const response = await axios.get<IMaterial>(
    `${baseUrl}/material?type=${productType}`,
  );

  return response.data;
}

export { fetchMaterial };
