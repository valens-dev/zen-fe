import { useState } from 'react';

import { type ITabSelectionState } from '@/types/tab-selection';

export function useTabSelection(initialTab = 0): ITabSelectionState {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  function handleChange(_event: React.SyntheticEvent, newValue: number): void {
    setSelectedTab(newValue);
  }

  return { selectedTab, handleChange };
}
