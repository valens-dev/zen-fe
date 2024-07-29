import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { AttributeAPI } from './api';

import { groupAttributes } from './utils';
import { type IGroupedAttributesResult } from './types';

export function useAttributes(): UseQueryResult<IGroupedAttributesResult> {
  return useQuery<IGroupedAttributesResult>({
    queryKey: ['attributes'],
    queryFn: async () => {
      const attributes = await AttributeAPI.getAll();
      return groupAttributes(attributes);
    },
    placeholderData: {
      attributeNames: [],
      attributeOptions: {},
    },
  });
}
