import { useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useCreateMaterial } from '@/services/material/hooks';

import { Box } from '@mui/material';

import { Button } from '@/shared/button';

import { MaterialForm } from '@/components/material/material-form';
import { initialValues } from '@/components/material/material-form/constants';

import { Header } from '@/layouts/header';
import { FormHeader } from '@/layouts/form-header';

import { useAlert } from '@/hooks/use-alert';

import { MaterialType, type IMaterial } from '@/types/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { useStyles } from '../styles';

import { materialConfig } from './constants';

// eslint-disable-next-line import/no-default-export
export default function AddMaterialPage(): React.ReactNode {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { classes } = useStyles();
  const { showAlert } = useAlert();
  const formRef = useRef<HTMLFormElement | null>(null);

  const type = searchParams.get('materialType') as MaterialType;
  const materialType: MaterialType = type ?? MaterialType.Product;
  const config = materialConfig[materialType];

  const mutation = useCreateMaterial();

  function handleButtonClick(): void {
    if (formRef.current) {
      const event = new Event('submit', { bubbles: true });
      formRef.current.dispatchEvent(event);
    }
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
        initialValues={initialValues}
        onSubmit={(data) => {
          const { parts, ...filteredData } = data;

          const manufacturingParts = parts
            .filter((part) => {
              return part.type === MaterialType.ManufacturingPart;
            })
            .map((part) => {
              return {
                id: part?.manufacturingParts?.id,
                quantity: part.quantity,
              };
            });
          const purchasingParts = parts
            .filter((part) => {
              return part.type === MaterialType.PurchasingPart;
            })
            .map((part) => {
              return {
                id: part?.purchasingParts?.id,
                quantity: part.quantity,
              };
            });

          mutation.mutate(
            {
              ...filteredData,
              type: materialType,
              manufacturingParts,
              purchasingParts,
            } as unknown as IMaterial,
            {
              onSuccess: () => {
                showAlert('Material created successfully!', 'success');
                navigate('/material');
              },
              onError: () => {
                showAlert('Failed to create material.', 'error');
              },
            },
          );
        }}
      />
    </Box>
  );
}
