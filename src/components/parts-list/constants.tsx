import 'react-lazy-load-image-component/src/effects/blur.css';

import { Typography } from '@mui/material';

import { Input } from '@/shared/input';

import { type IComponent } from '@/types/material';

export const columns = [
  {
    id: 'quantity',
    label: 'Einheiten',
    renderCell: (
      row: IComponent,
      rowIndex: number,
      handleChange: (index: number, field: string, value: string) => void,
    ) => {
      return (
        <Input
          type="number"
          name="quantity"
          placeholder="1"
          value={row.quantity}
          sx={{ width: '100px' }}
          onChange={(e) => {
            return handleChange(rowIndex, 'quantity', e.target.value);
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
