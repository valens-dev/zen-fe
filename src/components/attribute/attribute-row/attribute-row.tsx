import { useState, useEffect, useCallback } from 'react';

import { Box, capitalize, IconButton } from '@mui/material';

import MenuIcon from '@/assets/icon/menu.svg?react';
import DeleteIcon from '@/assets/icon/delete.svg?react';

import { useStyles } from '../styles';
import { type IAttribute } from '../constants';
import { CustomSelect } from '../custom-select/custom-select';

interface IAttributeRowProps {
  attribute: IAttribute;
  attributeNames: string[];
  attributeOptions: Record<string, string[]>;
  onDelete: () => void;
  onChange: (updatedAttribute: IAttribute) => void;
}

export function AttributeRow({
  attribute,
  attributeNames,
  attributeOptions,
  onDelete,
  onChange,
}: IAttributeRowProps): React.ReactNode {
  const { classes } = useStyles();
  const [localAttribute, setLocalAttribute] = useState<IAttribute>(attribute);
  const [options, setOptions] = useState<string[]>(
    attributeOptions[attribute.name] || [],
  );

  useEffect(() => {
    setLocalAttribute(attribute);
  }, [attribute]);

  const updateAttribute = useCallback(
    (updatedAttribute: IAttribute) => {
      setLocalAttribute(updatedAttribute);
      onChange(updatedAttribute);
    },
    [onChange],
  );

  function handleAddNewAttributeName(newName: string): void {
    attributeNames.push(newName);
    updateAttribute({ ...localAttribute, name: newName, option: '' });
  }

  function handleAddNewOption(name: string, option: string): void {
    const updatedOptions = [...(attributeOptions[name] || []), option];
    attributeOptions[name] = updatedOptions;
    setOptions(updatedOptions);
    updateAttribute({ ...localAttribute, option });
  }

  return (
    <Box className={classes.attributeRow}>
      <Box className={classes.iconButton}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
      <CustomSelect
        value={capitalize(localAttribute.name)}
        options={attributeNames}
        onChange={(newName: string) => {
          setOptions(attributeOptions[newName] || []);
          updateAttribute({ ...localAttribute, name: newName, option: '' });
        }}
        onAddNew={handleAddNewAttributeName}
      />
      <CustomSelect
        value={capitalize(localAttribute.option)}
        options={options}
        onChange={(newOption: string) => {
          updateAttribute({ ...localAttribute, option: newOption });
        }}
        onAddNew={(newOption: string) => {
          handleAddNewOption(localAttribute.name, newOption);
        }}
        disabled={!localAttribute.name}
      />
      <Box className={classes.iconButton}>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
