import { useState } from 'react';
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

import { Button } from '@/shared/button';

import { CustomNode } from './custom-node';
import { CustomEdge } from './custom-edge';
import { AddStationModal } from './add-station-modal/add-station-modal';
import { DeleteStationModal } from './delete-station-modal/delete-station-modal';

import { getLayoutedElements } from './utils';
import { initialEdges, initialNodes } from './constants';

import { useStyles } from './styles';

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);

export function StationSequence(): React.ReactNode {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [selectedStation, setSelectedStation] = useState<string>('');

  const { classes } = useStyles();

  const [nodes, _, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  function onConnect(params: Edge | Connection): void {
    setEdges((eds) => {
      return addEdge({ ...params }, eds);
    });
  }

  function handleDelete(): void {
    setModalOpen2(false);
  }

  return (
    <Box className={classes.wrapper}>
      <Button
        onClick={() => {
          setModalOpen1(true);
        }}
      >
        Add new station
      </Button>
      <Button
        onClick={() => {
          setSelectedStation('station_name');
          setModalOpen2(true);
        }}
      >
        Delete station
      </Button>
      <AddStationModal
        open={modalOpen1}
        onClose={() => {
          return setModalOpen1(false);
        }}
        onSave={() => {
          return setModalOpen1(false);
        }}
      />
      <DeleteStationModal
        open={modalOpen2}
        stationName={selectedStation}
        onClose={() => {
          return setModalOpen2(false);
        }}
        onDelete={handleDelete}
      />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={{ custom: CustomNode }}
        edgeTypes={{ custom: CustomEdge }}
      />
    </Box>
  );
}
