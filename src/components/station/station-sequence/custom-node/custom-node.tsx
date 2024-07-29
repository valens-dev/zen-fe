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

export function CustomNode(props: ICustomNodeProps): React.ReactNode {
  const { data } = props;
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.textContainer}>
        <Typography className={classes.label}>{data.label}</Typography>
        <Typography className={classes.value}>{data.value}</Typography>
      </Box>
      <Avatar src={data.avatarUrl} className={classes.avatar} />
      <IconButton className={classes.iconButton}>
        <AddIcon color="primary" />
      </IconButton>
      <Handle
        type="target"
        position={Position.Left}
        style={{ borderRadius: 0, left: '-7px' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ borderRadius: 0, right: '-12px' }}
      />
    </Box>
  );
}
