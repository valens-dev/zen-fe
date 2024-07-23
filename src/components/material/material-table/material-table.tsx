import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { type ColumnDef } from '@tanstack/react-table';
import { useMaterialContext } from '@/services/context/material-context';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SectionHeader } from '@/layouts/section-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { type IProduct } from './types';

import { useStyles } from './styles';

interface IMaterialTableProps {
  title: string;
  buttonText: string;
  materialType: 'product' | 'ManufacturingPart' | 'PurchasingPart';
  columns: ColumnDef<IProduct, string>[];
}

export function MaterialTable({
  title,
  buttonText,
  materialType,
  columns,
}: IMaterialTableProps): JSX.Element {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const { materials, fetchMaterials } = useMaterialContext();

  useEffect((): void => {
    fetchMaterials({ type: materialType });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materialType]);

  function handleOpenAddPage(): void {
    navigate('/material/add-material', { state: { materialType } });
  }

  return (
    <Box className={classes.wrapper}>
      <SectionHeader
        title={title}
        actions={
          <Button onClick={handleOpenAddPage} startIcon={<AddIcon />}>
            {buttonText}
          </Button>
        }
      />
      <Table
        columns={columns}
        data={materials as unknown as IProduct[]}
        fetchData={fetchMaterials}
      />
    </Box>
  );
}
