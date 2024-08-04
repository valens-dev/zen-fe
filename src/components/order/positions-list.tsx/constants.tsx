import 'react-lazy-load-image-component/src/effects/blur.css';

import { Switch, Typography } from '@mui/material';

import { Input } from '@/shared/input';

import { type IPosition } from '../order-form/types';

export const columns = [
  {
    id: 'quantity',
    label: 'Einheiten',
    renderCell: (
      row: IPosition,
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
    renderCell: (row: IPosition) => {
      return <Typography>{row.name}</Typography>;
    },
  },
  {
    id: 'netPrice',
    label: 'Neto Price',
    renderCell: (row: IPosition) => {
      return <Typography>{row.netPrice}</Typography>;
    },
  },
  {
    id: 'useInventory',
    label: 'Stock Use (Log. Order)',
    renderCell: (
      row: IPosition,
      rowIndex: number,
      handleChange: (index: number, field: string, value: boolean) => void,
    ) => {
      return (
        <Switch
          checked={row.useInventory ?? false}
          onChange={(e) => {
            return handleChange(rowIndex, 'useInventory', e.target.checked);
          }}
          color="primary"
        />
      );
    },
  },
];
