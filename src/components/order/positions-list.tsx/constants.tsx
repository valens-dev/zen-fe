import 'react-lazy-load-image-component/src/effects/blur.css';

import { Switch, Typography } from '@mui/material';

import { Input } from '@/shared/input';

import { type IMaterialOrder } from '@/types/material';

export const columns = [
  {
    id: 'quantity',
    label: 'Einheiten',
    renderCell: (
      row: IMaterialOrder,
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
    renderCell: (row: IMaterialOrder) => {
      return <Typography>{row.name}</Typography>;
    },
  },
  {
    id: 'netPrice',
    label: 'Neto Price',
    renderCell: (row: IMaterialOrder) => {
      return <Typography>{row.netPrice}</Typography>;
    },
  },
  {
    id: 'useInventory',
    label: 'Stock Use (Log. Order)',
    renderCell: (
      row: IMaterialOrder,
      rowIndex: number,
      handleChange: (index: number, field: string, value: boolean) => void,
    ) => {
      return (
        <Switch
          checked={row.useInventory}
          onChange={(e) => {
            return handleChange(rowIndex, 'useInventory', e.target.checked);
          }}
          color="primary"
        />
      );
    },
  },
];
