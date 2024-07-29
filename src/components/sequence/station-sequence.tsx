import { useCallback } from 'react';
import {
  addEdge,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  useNodesState,
  useEdgesState,
  type Connection,
  ConnectionLineType,
  type OnNodesChange,
  type OnEdgesChange,
} from '@xyflow/react';

import * as dagre from 'dagre';
import '@xyflow/react/dist/style.css';

import { initialEdges, initialNodes } from './constants';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => {
  return {};
});

const nodeWidth = 172;
const nodeHeight = 36;

function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
): { nodes: Node[]; edges: Edge[] } {
  dagreGraph.setGraph({ rankdir: 'LR' });

  for (const node of nodes) {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  }

  for (const edge of edges) {
    dagreGraph.setEdge(edge.source, edge.target);
  }

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode: Node = {
      ...node,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };

    return newNode;
  });

  return { nodes: newNodes, edges };
}

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);

// eslint-disable-next-line import/no-default-export
export default function StationSequence(): React.ReactNode {
  const [nodes, _, onNodesChange]: [Node[], unknown, OnNodesChange] =
    useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange]: [
    Edge[],
    (setter: (edges: Edge[]) => Edge[]) => void,
    OnEdgesChange,
  ] = useEdgesState(layoutedEdges);

  const onConnect = useCallback(
    (params: Edge | Connection): void => {
      setEdges((eds) => {
        return addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds,
        );
      });
    },
    [setEdges],
  );

  return (
    <div style={{ overflow: 'auto', width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      />
    </div>
  );
}
