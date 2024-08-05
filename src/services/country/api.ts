import { api } from '../api';

import { type ICountry } from './types';

const endpoint = '/Country';

async function getCountries(): Promise<ICountry[]> {
  const response = await api.get<ICountry[]>(endpoint);
  return response.data;
}

export const CountryAPI = {
  getCountries,
};
