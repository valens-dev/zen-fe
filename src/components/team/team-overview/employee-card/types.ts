export interface IEmployeeCategory {
  id: number;
  name: string;
  count: number;
  color: string;
}

export interface IEmployeeCardProps {
  totalEmployees: number;
  categories: IEmployeeCategory[];
}
