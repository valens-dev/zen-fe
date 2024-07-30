import { Handle, Position, type NodeProps } from '@xyflow/react';

import { Box, Avatar, IconButton, Typography } from '@mui/material';

import AddIcon from '@/assets/icon/add.svg?react';

import { useStyles } from './styles';

interface ICustomNodeProps extends NodeProps {
  data: {
    label: string;
    value: number;
    avatarUrl: string;
  };
}

export function CustomNode({
  data: { label, value, avatarUrl },
}: ICustomNodeProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.textContainer}>
        <Typography className={classes.label}>{label}</Typography>
        <Typography className={classes.value}>{value}</Typography>
      </Box>
      <Avatar src={avatarUrl} className={classes.avatar} />
      <IconButton className={classes.iconButton}>
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
    </Box>
  );
}
