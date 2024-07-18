export interface IStatusColor {
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

export const statusColors: IStatusColors = {
  Open: { background: '#FFF6ED', text: '#FFA347' },
  Ordered: { background: '#FFEEF6', text: '#EC4899' },
  'In Progress': { background: '#EFF8FF', text: '#175CD3' },
  'Ready to use': { background: '#F3F3FF', text: '#6366F1' },
  'Ready to ship': { background: '#ECFDF3', text: '#12B76A' },
  Sent: { background: '#CEFDE2', text: '#12B76A' },
  Delivered: { background: '#F8FAFC', text: '#475569' },
  Canceled: { background: '#FEF3F2', text: '#F04438' },
};
