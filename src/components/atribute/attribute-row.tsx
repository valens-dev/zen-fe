import type React from 'react';

import { Box, IconButton } from '@mui/material';

import MenuIcon from '@/assets/icon/menu.svg?react';
import DeleteIcon from '@/assets/icon/delete.svg?react';

import { CustomSelect } from './custom-select';

import { useStyles } from './styles';

interface IAttribute {
  name: string;
  option: string;
}

interface IAttributeRowProps {
  attribute: IAttribute;
  attributeOptions: string[];
  options: string[];
  onDelete: () => void;
  onAddNewOption: (name: string, option: string) => void;
  onAddNewAttributeName: (newName: string) => void;
  onChange: (updatedAttribute: IAttribute) => void;
}

export function AttributeRow({
  attribute,
  attributeOptions,
  options,
  onDelete,
  onAddNewOption,
  onAddNewAttributeName,
  onChange,
}: IAttributeRowProps): React.ReactElement {
  const { classes } = useStyles();

  function handleAddNewAttributeName(newName: string): void {
    onAddNewAttributeName(newName);
    onChange({ ...attribute, name: newName, option: '' });
  }

  function handleAddNewOption(name: string, option: string): void {
    onAddNewOption(name, option);
    onChange({ ...attribute, option });
  }

  return (
    <Box className={classes.attributeRow}>
      <Box className={classes.iconButton}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
      <CustomSelect
        value={attribute.name}
        options={attributeOptions}
        onChange={(newName: string) => {
          return onChange({ ...attribute, name: newName, option: '' });
        }}
        onAddNew={handleAddNewAttributeName}
      />
      <CustomSelect
        value={attribute.option}
        options={options}
        onChange={(newOption: string) => {
          return onChange({ ...attribute, option: newOption });
        }}
        onAddNew={(newOption: string) => {
          return handleAddNewOption(attribute.name, newOption);
        }}
        disabled={!attribute.name}
      />
      <Box className={classes.iconButton}>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
