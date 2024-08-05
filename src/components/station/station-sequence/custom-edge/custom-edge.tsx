import { useState } from 'react';
import { getBezierPath, type EdgeProps } from '@xyflow/react';

import { IconButton } from '@mui/material';

import DeleteIcon from '@/assets/icon/delete.svg?react';
import FilterIcon from '@/assets/icon/filter.svg?react';
import SettingsIcon from '@/assets/icon/settings.svg?react';

import { SequenceMenu } from '../sequence-menu/sequence-menu';

import { useStyles } from './styles';

interface ICustomEdgeProps extends EdgeProps {
  onDelete: (edgeId: string) => void;
}

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
  onDelete,
}: ICustomEdgeProps): React.ReactNode {
  const { classes } = useStyles();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>();
  const open = Boolean(anchorEl);

  function handleIconButtonClick(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose(): void {
    setAnchorEl(undefined);
  }

  function handleDelete(): void {
    onDelete(id);
    handleMenuClose();
  }

  const menuItems = [
    {
      icon: <FilterIcon />,
      text: 'Filter',
      isDelete: false,
      onClick: () => {
        //TODO
      },
    },
    {
      icon: <DeleteIcon />,
      text: 'Delete link',
      isDelete: true,
      onClick: handleDelete,
    },
  ];

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
        <IconButton
          className={classes.iconButton}
          onClick={handleIconButtonClick}
        >
          <SettingsIcon />
        </IconButton>
        <SequenceMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          menuItems={menuItems}
        />
      </foreignObject>
    </>
  );
}
