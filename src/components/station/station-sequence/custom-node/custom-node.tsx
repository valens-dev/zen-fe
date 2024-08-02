import { useState } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

import { Box, Avatar, IconButton, Typography } from '@mui/material';

import AddIcon from '@/assets/icon/add.svg?react';
import DeleteIcon from '@/assets/icon/delete.svg?react';
import AddStationIcon from '@/assets/icon/attribute.svg?react';

import { SequenceMenu } from '../sequence-menu/sequence-menu';
import { AddStationModal } from '../add-station-modal/add-station-modal';
import { DeleteStationModal } from '../delete-station-modal/delete-station-modal';

import { useStyles } from './styles';

export interface ICustomNodeProps extends NodeProps {
  data: {
    label: string;
    value: number;
    avatarUrl: string;
  };
  onDelete: (id: string) => void;
  onAdd: (newNode: { label: string; value: number; avatarUrl: string }) => void;
}

export function CustomNode({
  id,
  data: { label, value, avatarUrl },
  onDelete,
  onAdd,
}: ICustomNodeProps): React.ReactNode {
  const { classes } = useStyles();

  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>();

  function handleIconButtonClick(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose(): void {
    setAnchorEl(undefined);
  }

  const open = Boolean(anchorEl);

  const menuItems = [
    {
      icon: <AddStationIcon className={classes.stationIcon} />,
      text: 'Add station',
      isDelete: false,
      onClick: () => {
        return setModalOpen1(true);
      },
    },
    {
      icon: <DeleteIcon />,
      text: 'Delete station',
      isDelete: true,
      onClick: () => {
        return setModalOpen2(true);
      },
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.textContainer}>
        <Typography className={classes.label}>{label}</Typography>
        <Typography className={classes.value}>{value}</Typography>
      </Box>
      <Avatar src={avatarUrl} className={classes.avatar} />
      <IconButton
        className={classes.iconButton}
        onClick={handleIconButtonClick}
      >
        <AddIcon color="primary" />
      </IconButton>

      <Handle
        type="target"
        position={Position.Left}
        className={classes.leftHandle}
      />
      <Handle
        type="source"
        position={Position.Right}
        className={classes.rightHandle}
      />

      <SequenceMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        menuItems={menuItems}
      />

      <AddStationModal
        open={modalOpen1}
        onClose={() => {
          return setModalOpen1(false);
        }}
        onSave={() => {
          return onAdd({
            label: 'randomLabel',
            value: 2,
            avatarUrl: 'https://via.placeholder.com/30',
          });
        }}
      />

      <DeleteStationModal
        open={modalOpen2}
        stationName={label}
        onClose={() => {
          return setModalOpen2(false);
        }}
        onDelete={() => {
          setModalOpen2(false);
          onDelete(id);
        }}
      />
    </Box>
  );
}
