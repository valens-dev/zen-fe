import {
  Box,
  Button,
  IconButton,
  Typography,
  Modal as BaseModal,
} from '@mui/material';

import CloseIcon from '@/assets/icon/close.svg?react';

import { useStyles } from './styles';

interface IModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  primaryActionLabel: string;
  onPrimaryAction: () => void;
  primaryActionClass?: string;
}

export function Modal({
  open,
  onClose,
  title,
  children,
  primaryActionLabel,
  onPrimaryAction,
  primaryActionClass,
}: IModalProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <BaseModal open={open} onClose={onClose}>
      <Box className={classes.wrapper}>
        <Box className={classes.header}>
          <Typography className={classes.title}>{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className={classes.container}>{children}</Box>
        <Box className={classes.footer}>
          <Button onClick={onClose} className={classes.cancelButton}>
            Cancel
          </Button>
          <Button
            onClick={onPrimaryAction}
            className={`${classes.primaryButton} ${primaryActionClass}`}
          >
            {primaryActionLabel}
          </Button>
        </Box>
      </Box>
    </BaseModal>
  );
}
