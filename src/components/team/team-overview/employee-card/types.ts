export interface IEmployeeCategory {
  name: string;
  count: number;
  color: string;
}

export interface IEmployeeCardProps {
  totalEmployees: number;
  categories: IEmployeeCategory[];
}
