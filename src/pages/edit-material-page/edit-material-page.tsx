import { useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useMaterialByIdAndType } from '@/services/material';

import { Box } from '@mui/material';

import { Button } from '@/shared/button';
import { Loading } from '@/shared/status-components/loading';

import { MaterialForm } from '@/components/material/material-form';

import { Header } from '@/layouts/header';
import { FormHeader } from '@/layouts/form-header';

import { MaterialType } from '@/types/material';

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

  function handleButtonClick(): void {
    if (formRef.current) {
      const event = new Event('submit', { bubbles: true });
      formRef.current.dispatchEvent(event);
    }
  }

  const { data: materialData, isLoading } = useMaterialByIdAndType(
    Number(materialId),
    materialType,
  );

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
        onSubmit={(data) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }}
      />
    </Box>
  );
}
