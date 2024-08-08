import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller, FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Typography } from '@mui/material';

import { Input } from '@/shared/input';
import { Button } from '@/shared/button';

import IconSend from '@/assets/icon/send-2.svg?react';

import {
  initialValues,
  type IAnonymousData,
  suggestionValidationSchema,
} from './types';

import { useStyles } from './styles';

interface IAnonymouseProps {
  onSubmit: (data: IAnonymousData) => void;
}

const AnonymousForm = forwardRef<HTMLFormElement, IAnonymouseProps>(
  ({ onSubmit }, ref) => {
    const { t } = useTranslation();
    const { classes } = useStyles();
    const methods = useForm<IAnonymousData>({
      defaultValues: initialValues,
      resolver: yupResolver(suggestionValidationSchema),
    });

    return (
      <FormProvider {...methods}>
        <Box className={classes.wrapper}>
          <Box
            component="form"
            ref={ref}
            onSubmit={(e): void => {
              return void methods.handleSubmit(onSubmit)(e);
            }}
            className={classes.formContainer}
          >
            <Box className={classes.inputRow1}>
              <Controller
                name="topic"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      placeholder={t('station.anonymouseForm.topic')}
                      error={Boolean(methods.formState.errors.topic)}
                    />
                  );
                }}
              />
            </Box>
            <Box className={classes.inputRow2}>
              <Controller
                name="suggestion"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      //   className={classes.inputRow}
                      placeholder={t('station.anonymouseForm.suggestion')}
                      error={Boolean(methods.formState.errors.suggestion)}
                    />
                  );
                }}
              />
            </Box>
            <Box>
              <Button
                className={classes.btnSend}
                type="submit"
                variant="primary"
              >
                <Typography className={classes.btnText}>
                  {/* {t('station.stationLoginForm.submitButton')} */}
                  {t('station.anonymouseForm.send')}
                </Typography>
                <IconSend />
              </Button>
            </Box>
          </Box>
        </Box>
      </FormProvider>
    );
  },
);

AnonymousForm.displayName = 'LoginForm';

export { AnonymousForm };
