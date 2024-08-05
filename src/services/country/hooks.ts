import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { CountryAPI } from './api';

import { type ICountry } from './types';

export function useCountries(): UseQueryResult<ICountry[], Error> {
  return useQuery<ICountry[], Error>({
    queryKey: ['countries'],
    queryFn: CountryAPI.getCountries,
  });
}
