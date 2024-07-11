export interface ITabSectionProps {
  title: string;
  tabs: { label: string; component: React.ElementType }[];
  selectedTab: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}
