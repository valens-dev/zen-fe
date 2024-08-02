import { type IStationOptions } from './types';

export function getStationOptions(): IStationOptions[] {
  return [
    { label: 'Coating Final', value: 'coating_final' },
    { label: 'Inspection', value: 'inspection' },
    { label: 'Assembly', value: 'assembly' },
  ];
}
