import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { changeLanguage } from 'i18next';

import { Box, Button } from '@mui/material';

import { useStyles } from './styles';

export function LanguageSwitcher(): JSX.Element {
  const { i18n } = useTranslation();
  const { classes } = useStyles();

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
        onClick={() => {
          handleChangeLanguage('en');
        }}
        variant={getVariant('en')}
        className={classes.button}
        size="small"
      >
        EN
      </Button>
      <Button
        size="small"
        className={classes.button}
        onClick={() => {
          handleChangeLanguage('de');
        }}
        variant={getVariant('de')}
      >
        DE
      </Button>
    </Box>
  );
}
