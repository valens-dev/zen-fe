import { type CSSProperties } from 'react';

export interface IMenuItemType {
  id: number;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  style?: CSSProperties;
}
