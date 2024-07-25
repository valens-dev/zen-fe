import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { MaterialAPI } from '@/services/material/api';

import { Box } from '@mui/material';

import { Button } from '@/shared/button';

import { MaterialForm } from '@/components/material/material-form';
import { type IFormData } from '@/components/material/material-form/types';

import { Header } from '@/layouts/header';
import { FormHeader } from '@/layouts/form-header';

import { MaterialType, type IMaterial } from '@/types/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { useStyles } from '../styles';

import { materialConfig } from './constants';

interface ILocationState {
  materialType: MaterialType;
}

// eslint-disable-next-line import/no-default-export
export default function AddMaterialPage(): React.ReactNode {
  const navigate = useNavigate();
  const location = useLocation();
  const { classes } = useStyles();
  const formRef = useRef<HTMLFormElement | null>(null);

  const state = location.state as ILocationState | undefined;
  const materialType: MaterialType =
    state?.materialType ?? MaterialType.Product;
  const config = materialConfig[materialType];

  async function handleSubmit(data: IFormData): Promise<void> {
    try {
      const extendedData = {
        ...data,
        type: materialType,
        manufacturingParts: [],
        purchasingParts: [],
      };
      await MaterialAPI.createMaterial(extendedData as IMaterial);
      navigate('/material');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error creating material:', error);
    }
  }

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
        onSubmit={async (data) => {
          await handleSubmit(data);
        }}
        ref={formRef}
      />
    </Box>
  );
}
