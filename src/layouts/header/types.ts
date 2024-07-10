export interface IHeaderProps {
  title: string;
  tabs: { label: string; component: React.ReactNode }[];
  selectedTab: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}
