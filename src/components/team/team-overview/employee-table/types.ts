export interface IEmployee {
  id: number;
  imageUrl: string;
  firstName: string;
  lastName: string;
  group: string;
  status: string;
}

interface IStatusColor {
  background: string;
  text: string;
}

export interface IStatusColors {
  active: IStatusColor;
  inactive: IStatusColor;
}
