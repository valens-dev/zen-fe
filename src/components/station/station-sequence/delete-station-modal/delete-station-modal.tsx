import { Box, Modal, IconButton, Typography } from '@mui/material';

import { Button } from '@/shared/button';

import DeleteIcon from '@/assets/icon/delete.svg?react';

import { useStyles } from './styles';

interface IDeleteStationModalProps {
  open: boolean;
  stationName: string;
  onClose: () => void;
  onDelete: () => void;
}

export function DeleteStationModal({
  open,
  onClose,
  onDelete,
}: IDeleteStationModalProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={classes.wrapper}>
        <Box className={classes.header}>
          <IconButton className={classes.iconContainer}>
            <DeleteIcon />
          </IconButton>
          <Box className={classes.text}>
            <Typography className={classes.title}>
              Are you sure you want to delete station?
            </Typography>
            <Typography className={classes.subtitle}>
              This action cannot be undone.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.footer}>
          <Button onClick={onClose} className={classes.cancelButton}>
            Cancel
          </Button>
          <Button onClick={onDelete} className={classes.deleteButton}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
