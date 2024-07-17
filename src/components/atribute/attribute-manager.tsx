import { useState, useEffect, forwardRef } from 'react';

import { Box, Button, Typography } from '@mui/material';

import AddIcon from '@/assets/icon/attribute.svg?react';

import { AttributeRow } from './attribute-row';

import { ATTRIBUTE_NAMES, ATTRIBUTE_OPTIONS } from './constants';

import { useStyles } from './styles';

interface IAttribute {
  name: string;
  option: string;
}

interface IAttributeManagerProps {
  value: IAttribute[];
  onChange: (attributes: IAttribute[]) => void;
}

type IAttributeOptions = Record<string, string[]>;

interface IAttributeState {
  names: string[];
  options: IAttributeOptions;
}

export const AttributeManager = forwardRef<
  HTMLDivElement,
  IAttributeManagerProps
>(function AttributeManager({ value, onChange }): React.ReactElement {
  const { classes } = useStyles();

  const [attributes, setAttributes] = useState<IAttribute[]>(value);
  const [attributeState, setAttributeState] = useState<IAttributeState>({
    names: ATTRIBUTE_NAMES,
    options: ATTRIBUTE_OPTIONS,
  });

  useEffect(() => {
    setAttributes(value);
  }, [value]);

  function handleAddRow(): void {
    const isValid = attributes.every((attribute) => {
      return attribute.name && attribute.option;
    });
    if (isValid) {
      setAttributes([...attributes, { name: '', option: '' }]);
    }
  }

  function handleDeleteRow(index: number): void {
    const newAttributes = [...attributes];
    newAttributes.splice(index, 1);
    setAttributes(newAttributes);
    onChange(newAttributes);
  }

  function handleAddNewOption(name: string, option: string): void {
    setAttributeState((prevState) => {
      return {
        ...prevState,
        options: {
          ...prevState.options,
          [name]: [...(prevState.options[name] || []), option],
        },
      };
    });
  }

  function handleAddNewAttributeName(newName: string): void {
    setAttributeState((prevState) => {
      return {
        ...prevState,
        names: [...prevState.names, newName],
      };
    });
  }

  function handleChangeAttribute(
    index: number,
    updatedAttribute: IAttribute,
  ): void {
    const newAttributes = [...attributes];
    newAttributes[index] = updatedAttribute;
    if (updatedAttribute.name && !updatedAttribute.option) {
      newAttributes[index].option = '';
    }
    if (updatedAttribute.name && updatedAttribute.option) {
      setAttributes(newAttributes);
      onChange(newAttributes);
    } else if (!updatedAttribute.option) {
      newAttributes[index].option = '';
      setAttributes(newAttributes);
      onChange(newAttributes);
    }
  }

  return (
    <Box className={classes.attributeWrapper}>
      <Typography className={classes.title}>Attribute</Typography>
      <Box className={classes.attributeContainer}>
        {attributes.map((attribute, index) => {
          return (
            <AttributeRow
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              attribute={attribute}
              attributeOptions={attributeState.names}
              options={attributeState.options[attribute.name] || []}
              onDelete={() => {
                return handleDeleteRow(index);
              }}
              onAddNewOption={handleAddNewOption}
              onAddNewAttributeName={handleAddNewAttributeName}
              onChange={(updatedAttribute: IAttribute) => {
                return handleChangeAttribute(index, updatedAttribute);
              }}
            />
          );
        })}
      </Box>
      <Button onClick={handleAddRow} className={classes.addButton}>
        <AddIcon /> Add Row
      </Button>
    </Box>
  );
});
