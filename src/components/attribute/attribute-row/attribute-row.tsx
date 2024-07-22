import { useState, useEffect, useCallback } from 'react';

import { Box, IconButton } from '@mui/material';

import MenuIcon from '@/assets/icon/menu.svg?react';
import DeleteIcon from '@/assets/icon/delete.svg?react';

import { useStyles } from '../styles';
import { CustomSelect } from '../custom-select/custom-select';
import {
  type IAttribute,
  ATTRIBUTE_NAMES,
  ATTRIBUTE_OPTIONS,
} from '../constants';

interface IAttributeRowProps {
  attribute: IAttribute;
  onDelete: () => void;
  onChange: (updatedAttribute: IAttribute) => void;
}

export function AttributeRow({
  attribute,
  onDelete,
  onChange,
}: IAttributeRowProps): React.ReactNode {
  const { classes } = useStyles();
  const [localAttribute, setLocalAttribute] = useState<IAttribute>(attribute);
  const [attributeOptions, setAttributeOptions] =
    useState<string[]>(ATTRIBUTE_NAMES);
  const [options, setOptions] = useState<string[]>(
    ATTRIBUTE_OPTIONS[attribute.name] || [],
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
    setAttributeOptions([...attributeOptions, newName]);
    updateAttribute({ ...localAttribute, name: newName, option: '' });
  }

  function handleAddNewOption(name: string, option: string): void {
    const updatedOptions = [...(ATTRIBUTE_OPTIONS[name] || []), option];
    ATTRIBUTE_OPTIONS[name] = updatedOptions;
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
        value={localAttribute.name}
        options={attributeOptions}
        onChange={(newName: string) => {
          setOptions(ATTRIBUTE_OPTIONS[newName] || []);
          updateAttribute({ ...localAttribute, name: newName, option: '' });
        }}
        onAddNew={handleAddNewAttributeName}
      />
      <CustomSelect
        value={localAttribute.option}
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
