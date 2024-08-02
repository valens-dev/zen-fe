export interface IOrder {
  id: number;
  orderNumber: string;
  orderDate: string;
  customer: string;
  amount: string;
  deliveryDate: string;
  status: string;
}

interface IStatusColor {
  background: string;
  text: string;
}

export interface IStatusColors {
  Open: IStatusColor;
  Ordered: IStatusColor;
  'In Progress': IStatusColor;
  'Ready to use': IStatusColor;
  'Ready to ship': IStatusColor;
  Sent: IStatusColor;
  Delivered: IStatusColor;
  Canceled: IStatusColor;
}
