import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { changeLanguage } from 'i18next';

import { Box, Button, Typography } from '@mui/material';

import { useStyles } from './styles';

interface IHeaderProps {
  title: string;
}

export function Header({ title }: IHeaderProps): React.ReactElement {
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

  return (
    <Box className={classes.header}>
      <Typography className={classes.title}>{title}</Typography>
      <Box className={classes.languageButtons}>
        <Button
          size="small"
          className={classes.button}
          onClick={(): void => {
            return handleChangeLanguage('en');
          }}
          variant={selectedLanguage === 'en' ? 'contained' : 'outlined'}
        >
          EN
        </Button>
        <Button
          size="small"
          className={classes.button}
          onClick={(): void => {
            return handleChangeLanguage('de');
          }}
          variant={selectedLanguage === 'de' ? 'contained' : 'outlined'}
        >
          DE
        </Button>
      </Box>
    </Box>
  );
}
