import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { TableHeader } from '@/shared/table-header';

import { DynamicTable } from '@/components/dynamic-table';

import {
  materialFieldMap,
  manufactorintRows,
  materialTableHeaders,
} from '../constants';

import { useStyles } from './styles';

export function ManufacturingPart(): React.ReactNode {
  const { classes } = useStyles();
  const navigate = useNavigate();

  function handleOpenAddProductPage(): void {
    //TODO: additionaly we will send type of material which will be created
    //TODO: consider using one function for all materials
    navigate('/material/add-material');
  }

  return (
    <Box className={classes.wrapper}>
      <TableHeader
        title="Manufacturing part"
        buttonText="Add BOM"
        onButtonClick={handleOpenAddProductPage}
      />
      <DynamicTable
        rows={manufactorintRows}
        headers={materialTableHeaders}
        fieldMap={materialFieldMap}
        imageField="name"
      />
    </Box>
  );
}
