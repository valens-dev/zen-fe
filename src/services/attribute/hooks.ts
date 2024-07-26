import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { AttributeAPI } from './api';

import { groupAttributes, type IGroupedAttributesResult } from './utils';

export function useAttributes(): UseQueryResult<IGroupedAttributesResult> {
  return useQuery<IGroupedAttributesResult>({
    queryKey: ['attributes'],
    queryFn: async () => {
      const attributes = await AttributeAPI.getAttributes();
      return groupAttributes(attributes);
    },
    placeholderData: {
      attributeNames: [],
      attributeOptions: {},
    },
  });
}
