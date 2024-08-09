import { useState, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Link, Typography, IconButton } from '@mui/material';

import { Input } from '@/shared/input';
import { Button } from '@/shared/button';

import { loginValidationSchema } from '@/components/validation/station-login';

import EyeOpenIcon from '@/assets/icon/eye-open.svg?react';
import EyeClosedIcon from '@/assets/icon/eye-closed.svg?react';

import { initialValues } from './constants';
import { type ILoginFormData } from './types';

import { useStyles } from './styles';

interface ILoginFormProps {
  onSubmit: (data: ILoginFormData) => void;
}

const LoginForm = forwardRef<HTMLFormElement, ILoginFormProps>(
  ({ onSubmit }, ref) => {
    const { t } = useTranslation();
    const { classes } = useStyles();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const methods = useForm<ILoginFormData>({
      defaultValues: initialValues,
      resolver: yupResolver(loginValidationSchema),
    });
    const navigate = useNavigate();

    function togglePasswordVisibility(): void {
      setPasswordVisible(!passwordVisible);
    }

    function navigateToNextPage(): void {
      navigate(`/station/worker-main-menu`);
    }

    return (
      <FormProvider {...methods}>
        <Box className={classes.wrapper}>
          <Box className={classes.headerBox}>
            <Typography className={classes.title}>
              {t('station.stationLogin')}
            </Typography>
            <Typography className={classes.subtitle}>
              {t('station.stationLoginForm.subtitle')}
            </Typography>
          </Box>
          <Box
            component="form"
            ref={ref}
            onSubmit={(e): void => {
              return void methods.handleSubmit(onSubmit)(e);
            }}
            className={classes.formContainer}
          >
            <Box className={classes.inputRow}>
              <Controller
                name="username"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      placeholder={t('station.stationLoginForm.usernameInput')}
                      label={t('station.stationLoginForm.usernameLabel')}
                      error={Boolean(methods.formState.errors.username)}
                    />
                  );
                }}
              />
            </Box>
            <Box className={classes.inputRow}>
              <Controller
                name="password"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type={passwordVisible ? 'text' : 'password'}
                      placeholder={t('station.stationLoginForm.passwordInput')}
                      label={t('station.stationLoginForm.passwordLabel')}
                      adornment={
                        <IconButton onClick={togglePasswordVisibility}>
                          {passwordVisible ? (
                            <EyeOpenIcon />
                          ) : (
                            <EyeClosedIcon />
                          )}
                        </IconButton>
                      }
                      error={Boolean(methods.formState.errors.password)}
                    />
                  );
                }}
              />
              <Typography className={classes.forgotPassword}>
                <Link href="/forgot-password">
                  {t('station.stationLoginForm.forgotPassword')}
                </Link>
              </Typography>
            </Box>
            <Box>
              <Button
                type="submit"
                variant="primary"
                className={classes.submitButton}
                onClick={navigateToNextPage}
              >
                {t('station.stationLoginForm.submitButton')}
              </Button>
            </Box>
          </Box>
        </Box>
      </FormProvider>
    );
  },
);

LoginForm.displayName = 'LoginForm';

export { LoginForm };
