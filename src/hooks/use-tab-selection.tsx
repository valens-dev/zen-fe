import { useState } from 'react';

export interface ITabSelectionState {
  selectedTab: number;
  handleChange: (_event: React.SyntheticEvent, newValue: number) => void;
}

export function useTabSelection(initialTab = 0): ITabSelectionState {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  function handleChange(_event: React.SyntheticEvent, newValue: number): void {
    setSelectedTab(newValue);
  }

  return { selectedTab, handleChange };
}
