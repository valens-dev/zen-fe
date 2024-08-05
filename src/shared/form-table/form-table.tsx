import { useState, useEffect, useCallback } from 'react';

import {
  Box,
  Table,
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  TableContainer,
} from '@mui/material';

import DeleteIcon from '@/assets/icon/delete.svg?react';

import { useStyles } from './styles';

interface IColumn<T> {
  id: string;
  label: string;
  renderCell: (
    row: T,
    rowIndex: number,
    handleChange: (
      index: number,
      field: string,
      value: string | boolean,
    ) => void,
  ) => React.ReactNode;
}

interface IGenericTableProps<T> {
  columns: IColumn<T>[];
  data: T[];
  onDeleteRow: (index: number) => void;
  onChangeRow: (index: number, updatedRow: T) => void;
}

export function FormTable<T>({
  columns,
  data,
  onDeleteRow,
  onChangeRow,
}: IGenericTableProps<T>): React.ReactNode {
  const { classes } = useStyles();

  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const handleDelete = useCallback(
    (index: number) => {
      onDeleteRow(index);
    },
    [onDeleteRow],
  );

  const handleChange = useCallback(
    (index: number, field: string, value: string | boolean) => {
      const updatedRow = { ...localData[index], [field]: value };
      setLocalData((prevData) => {
        return prevData?.map((row, i) => {
          return i === index ? updatedRow : row;
        });
      });
      onChangeRow(index, updatedRow);
    },
    [localData, onChangeRow],
  );

  return (
    <Box className={classes.wrapper}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell className={classes.headTableRow} key={column.id}>
                    {column.label}
                  </TableCell>
                );
              })}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {localData?.map((row, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <TableRow key={index}>
                  {columns.map((column) => {
                    return (
                      <TableCell key={column.id}>
                        {column.renderCell(row, index, handleChange)}
                      </TableCell>
                    );
                  })}
                  <TableCell className={classes.deleteIcon}>
                    <IconButton
                      onClick={() => {
                        return handleDelete(index);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
