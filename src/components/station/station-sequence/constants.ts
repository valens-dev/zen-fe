import { ConnectionLineType } from '@xyflow/react';

const position = { x: 0, y: 0 };
const edgeType = ConnectionLineType.Bezier;

export const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: {
      label: 'input',
      value: 1,
      avatarUrl: 'https://via.placeholder.com/30',
    },
    position,
  },
  {
    id: '2',
    type: 'custom',
    data: {
      label: 'node 2',
      value: 2,
      avatarUrl: 'https://via.placeholder.com/30',
    },
    position,
  },
  {
    id: '2a',
    type: 'custom',
    data: {
      label: 'node 2a',
      value: 2.1,
      avatarUrl: 'https://via.placeholder.com/30',
    },
    position,
  },
  {
    id: '2b',
    type: 'custom',
    data: {
      label: 'node 2b',
      value: 2.2,
      avatarUrl: 'https://via.placeholder.com/30',
    },
    position,
  },
  {
    id: '2c',
    type: 'custom',
    data: {
      label: 'node 2c',
      value: 2.3,
      avatarUrl: 'https://via.placeholder.com/30',
    },
    position,
  },
  {
    id: '2d',
    type: 'custom',
    data: {
      label: 'node 2d',
      value: 2.4,
      avatarUrl: 'https://via.placeholder.com/30',
    },
    position,
  },
  {
    id: '3',
    type: 'custom',
    data: {
      label: 'node 3',
      value: 3,
      avatarUrl: 'https://via.placeholder.com/30',
    },
    position,
  },
];

export const initialEdges = [
  { id: 'e12', source: '1', target: '2', type: edgeType },
  { id: 'e13', source: '1', target: '3', type: edgeType },
  { id: 'e22a', source: '2', target: '2a', type: edgeType },
  { id: 'e22b', source: '2', target: '2b', type: edgeType },
  { id: 'e22c', source: '2', target: '2c', type: edgeType },
  { id: 'e2c2d', source: '2c', target: '2d', type: edgeType },
  { id: 'n2d', source: '2b', target: '2d', type: edgeType },
  { id: 'n2de', source: '2a', target: '2d', type: edgeType },
];
