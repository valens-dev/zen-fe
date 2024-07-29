import {
  addEdge,
  ReactFlow,
  type Edge,
  useNodesState,
  useEdgesState,
  type Connection,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { Box } from '@mui/material';

import { CustomNode } from './custom-node/custom-node';

import { getLayoutedElements } from './utils';
import { initialEdges, initialNodes } from './constants';

import { useStyles } from './styles';

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);

export function StationSequence(): React.ReactNode {
  const { classes } = useStyles();

  const [nodes, _, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  function onConnect(params: Edge | Connection): void {
    setEdges((eds) => {
      return addEdge({ ...params }, eds);
    });
  }

  return (
    <Box className={classes.wrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={{ custom: CustomNode }}
      />
    </Box>
  );
}
