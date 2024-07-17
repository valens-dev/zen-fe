import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { type ColumnDef } from '@tanstack/react-table';

import { Box } from '@mui/material';

import { Table } from '@/shared/table';
import { Button } from '@/shared/button';

import { SctionHeader } from '@/layouts/section-header';

import { type MaterialType } from '@/types/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { SearchBar } from '../search/search';

import { useStyles } from './styles';

interface IMaterialTableProps<T extends { name: string }> {
  title: string;
  buttonText: string;
  materialType: MaterialType;
  columns: ColumnDef<T, string>[];
  data: T[];
}

export function MaterialTable<T extends { name: string }>({
  title,
  buttonText,
  materialType,
  data,
  columns,
}: IMaterialTableProps<T>): React.ReactNode {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [materialData, setMaterialData] = useState<T[]>(data);

  function handleOpenAddPage(): void {
    navigate('/material/add-material', { state: { materialType } });
  }

  function handleSearch(searchQuery: string): void {
    const filteredData = data.filter((d) => {
      return d.name.includes(searchQuery);
    });
    setMaterialData(filteredData);
  }

  return (
    <Box className={classes.wrapper}>
      <SctionHeader
        title={title}
        actions={
          <Button onClick={handleOpenAddPage} startIcon={<AddIcon />}>
            {buttonText}
          </Button>
        }
      />
      <Box className={classes.tableContainer}>
        <SearchBar onSearchChange={handleSearch} />
        <Table columns={columns} data={materialData} />
      </Box>
    </Box>
  );
}
