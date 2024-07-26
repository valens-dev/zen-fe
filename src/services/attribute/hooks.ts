import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { AttributeAPI } from './api';

import { groupAttributes, type IGroupedAttribute } from './utils';

export function useAttributes(): UseQueryResult<IGroupedAttribute[]> {
  return useQuery<IGroupedAttribute[]>({
    queryKey: ['attributes'],
    queryFn: async () => {
      const attributes = await AttributeAPI.getAttributes();
      return groupAttributes(attributes);
    },
    placeholderData: [],
  });
}
