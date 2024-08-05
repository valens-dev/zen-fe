import {
  addEdge,
  ReactFlow,
  type Edge,
  useNodesState,
  useEdgesState,
  type EdgeProps,
  type NodeProps,
  type Connection,
} from '@xyflow/react';

import { v4 as uuidv4 } from 'uuid';
import '@xyflow/react/dist/style.css';

import { Box } from '@mui/material';

import { CustomEdge } from './custom-edge';
import { CustomNode, type ICustomNodeProps } from './custom-node';

import { getLayoutedElements } from './utils';
import { initialEdges, initialNodes } from './constants';

import { useStyles } from './styles';

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);

export function StationSequence(): React.ReactNode {
  const { classes } = useStyles();

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  function onConnect(params: Edge | Connection): void {
    setEdges((eds) => {
      return addEdge({ ...params, type: 'custom' }, eds);
    });
  }

  function handleDeleteNode(nodeId: string): void {
    setNodes((nds) => {
      return nds.filter((node) => {
        return node.id !== nodeId;
      });
    });
    setEdges((eds) => {
      return eds.filter((edge) => {
        return edge.source !== nodeId && edge.target !== nodeId;
      });
    });
  }

  function handleDeleteEdge(edgeId: string): void {
    setEdges((eds) => {
      return eds.filter((edge) => {
        return edge.id !== edgeId;
      });
    });
  }

  function handleAddNode(newNode: {
    label: string;
    value: number;
    avatarUrl: string;
  }): void {
    const newNodeId: string = uuidv4();
    const newNodeData = {
      id: newNodeId,
      type: 'custom',
      data: newNode,
      position: { x: 0, y: 0 },
    };

    setNodes((nds) => {
      return [...nds, newNodeData];
    });
  }

  function customEdgeComponent(edgeProps: EdgeProps): React.ReactNode {
    return <CustomEdge {...edgeProps} onDelete={handleDeleteEdge} />;
  }

  function customNodeComponent(nodeProps: NodeProps): React.ReactNode {
    const customNodeProps: ICustomNodeProps = {
      ...nodeProps,
      data: nodeProps.data as {
        label: string;
        value: number;
        avatarUrl: string;
      },
      onDelete: handleDeleteNode,
      onAdd: handleAddNode,
    };

    return <CustomNode {...customNodeProps} />;
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
        nodeTypes={{ custom: customNodeComponent }}
        edgeTypes={{ custom: customEdgeComponent }}
      />
    </Box>
  );
}
