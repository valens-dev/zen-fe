export interface ITabSelectionState {
  selectedTab: number;
  handleChange: (_event: React.SyntheticEvent, newValue: number) => void;
}
