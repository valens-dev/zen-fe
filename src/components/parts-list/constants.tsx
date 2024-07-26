import 'react-lazy-load-image-component/src/effects/blur.css';

import { Typography } from '@mui/material';

import { Input } from '@/shared/input';

export interface IComponent {
  units: number;
  unitType: string;
  name: string;
  imageUrl: string;
  duration: number;
}

export const initialData: IComponent[] = [
  {
    units: 1,
    unitType: 'Stk',
    name: 'Lenker',
    imageUrl: '/images/lenker.png',
    duration: 50,
  },
  {
    units: 1,
    unitType: 'Stk',
    name: 'Bremshebel',
    imageUrl: '/images/bremshebel.png',
    duration: 5,
  },
  {
    units: 1,
    unitType: 'Stk',
    name: 'Sattel',
    imageUrl: '/images/sattel.png',
    duration: 15,
  },
];

export const columns = [
  {
    id: 'units',
    label: 'Einheiten',
    renderCell: (
      row: IComponent,
      rowIndex: number,
      handleChange: (index: number, field: string, value: string) => void,
    ) => {
      return (
        <Input
          name="unit"
          placeholder="1"
          type="number"
          value={row.units.toString()}
          sx={{ width: '100px' }}
          onChange={(e) => {
            return handleChange(rowIndex, 'units', e.target.value);
          }}
          adornment="Stk"
        />
      );
    },
  },
  {
    id: 'name',
    label: 'Name',
    renderCell: (row: IComponent) => {
      return <Typography>{row.name}</Typography>;
    },
  },
  {
    id: 'duration',
    label: 'Bestand',
    renderCell: (row: IComponent) => {
      return <Typography>{row.duration}</Typography>;
    },
  },
];
