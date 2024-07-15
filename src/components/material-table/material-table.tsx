import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { TableHeader } from '@/shared/table-header';

import { DynamicTable } from '@/components/dynamic-table';

import { type MaterialType } from '@/pages/material-page/constants';

import { type IProductData } from './data';

import { useStyles } from './styles';

interface IMaterialTableProps {
  title: string;
  buttonText: string;
  rows: IProductData[];
  headers: string[];
  fieldMap: Record<string, keyof IProductData>;
  imageField?: keyof IProductData;
  materialType: MaterialType;
}

export function MaterialTable({
  title,
  buttonText,
  rows,
  headers,
  fieldMap,
  imageField,
  materialType,
}: IMaterialTableProps): React.ReactNode {
  const { classes } = useStyles();
  const navigate = useNavigate();

  function handleOpenAddPage(): void {
    navigate('/material/add-material', { state: { materialType } });
  }

  return (
    <Box className={classes.wrapper}>
      <TableHeader
        title={title}
        buttonText={buttonText}
        onButtonClick={handleOpenAddPage}
      />
      <DynamicTable
        rows={rows}
        headers={headers}
        fieldMap={fieldMap}
        imageField={imageField}
      />
    </Box>
  );
}
