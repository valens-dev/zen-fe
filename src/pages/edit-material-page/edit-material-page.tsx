import { useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useUpdateMaterial, useMaterialByIdAndType } from '@/services/material';

import { Box } from '@mui/material';

import { Button } from '@/shared/button';
import { Loading } from '@/shared/status-components/loading';

import { MaterialForm } from '@/components/material/material-form';
import { type IFormData } from '@/components/material/material-form/types';

import { Header } from '@/layouts/header';
import { FormHeader } from '@/layouts/form-header';

import { MaterialType, type IMaterial } from '@/types/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { useStyles } from '../styles';

import { materialConfig } from './constants';
import { createInitialValues } from './utils';

// eslint-disable-next-line import/no-default-export
export default function EditMaterialPage(): React.ReactNode {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement | null>(null);

  const type = searchParams.get('type') as MaterialType;
  const materialType: MaterialType = type ?? MaterialType.Product;
  const config = materialConfig[materialType];
  const materialId = searchParams.get('id');

  const { data: materialData, isLoading } = useMaterialByIdAndType(
    Number(materialId),
    materialType,
  );

  const { mutate: updateMaterial } = useUpdateMaterial();

  function handleButtonClick(): void {
    if (formRef.current) {
      const event = new Event('submit', { bubbles: true });
      formRef.current.dispatchEvent(event);
    }
  }

  function handleSubmit(data: IFormData): void {
    if (materialId) {
      const { parts, type: _unusedType, ...filteredData } = data;

      const manufacturingParts = parts
        .filter((part) => {
          return part.type === MaterialType.ManufacturingPart;
        })
        .map((part) => {
          return {
            id: part?.id,
            quantity: part.quantity,
          };
        });

      const purchasingParts = parts
        .filter((part) => {
          return part.type === MaterialType.PurchasingPart;
        })
        .map((part) => {
          return {
            id: part?.id,
            quantity: part.quantity,
          };
        });

      updateMaterial({
        id: Number(materialId),
        data: {
          ...filteredData,
          manufacturingParts,
          purchasingParts,
        } as unknown as IMaterial,
      });
    }
  }

  if (isLoading || !materialData) {
    return <Loading />;
  }

  return (
    <Box className={classes.wrapper}>
      <Header title={config.title} />
      <FormHeader
        path={config.path}
        actions={
          <Box>
            <Button
              onClick={() => {
                return navigate('/material');
              }}
              variant="secondary"
            >
              Discard
            </Button>
            <Button
              onClick={handleButtonClick}
              startIcon={<AddIcon />}
              sx={{ ml: 1 }}
            >
              {config.buttonText}
            </Button>
          </Box>
        }
      />
      <MaterialForm
        ref={formRef}
        materialType={materialType}
        initialValues={createInitialValues(materialData)}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}
