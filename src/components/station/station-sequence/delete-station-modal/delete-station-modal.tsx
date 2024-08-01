import { Box, IconButton, Typography } from '@mui/material';

import { ReusableModal } from '@/shared/modal/modal';

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
    <ReusableModal
      open={open}
      onClose={onClose}
      primaryActionLabel="Delete"
      onPrimaryAction={onDelete}
      primaryActionClass={classes.deleteButton}
    >
      <Box className={classes.boxContainer}>
        <IconButton className={classes.deleteIcon}>
          <DeleteIcon />
        </IconButton>
        <Box className={classes.textBox}>
          <Typography className={classes.text1}>
            Are you sure you want to delete this station?
          </Typography>
          <Typography className={classes.text2}>
            This action cannot be undone.
          </Typography>
        </Box>
      </Box>
    </ReusableModal>
  );
}
