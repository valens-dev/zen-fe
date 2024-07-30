import { getBezierPath, type EdgeProps } from '@xyflow/react';

import { IconButton } from '@mui/material';

import SettingsIcon from '@/assets/icon/settings.svg?react';

import { useStyles } from './styles';

export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps): React.ReactNode {
  const { classes } = useStyles();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={{ ...style, stroke: '#78C5FF', strokeWidth: 2 }}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject width={20} height={20} x={labelX - 8} y={labelY - 12}>
        <IconButton className={classes.iconButton}>
          <SettingsIcon />
        </IconButton>
      </foreignObject>
    </>
  );
}
