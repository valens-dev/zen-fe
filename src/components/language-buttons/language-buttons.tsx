import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { changeLanguage } from 'i18next';

import { Box, Button } from '@mui/material';

import { useStyles } from './styles';

export function LanguageButtons(): JSX.Element {
  const { classes } = useStyles();
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language,
  );

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  function handleChangeLanguage(lang: string): void {
    void changeLanguage(lang);
    setSelectedLanguage(lang);
  }

  function getVariant(lang: string): 'contained' | 'outlined' {
    return selectedLanguage === lang ? 'contained' : 'outlined';
  }

  return (
    <Box className={classes.languageButtons}>
      <Button
        size="small"
        className={classes.button}
        onClick={(): void => {
          handleChangeLanguage('en');
        }}
        variant={getVariant('en')}
      >
        EN
      </Button>
      <Button
        size="small"
        className={classes.button}
        onClick={(): void => {
          handleChangeLanguage('de');
        }}
        variant={getVariant('de')}
      >
        DE
      </Button>
    </Box>
  );
}
