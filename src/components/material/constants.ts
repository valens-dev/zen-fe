import { rows, type ProductData } from './data';

export const productRows = rows.filter((row) => {
  return row.materialType === 'product';
});

export const purchasingRows = rows.filter((row) => {
  return row.materialType === 'purchasing-part';
});
export const manufactorintRows = rows.filter((row) => {
  return row.materialType === 'manufactoring-part';
});

export const materialTableHeaders = [
  'Name',
  'Height',
  'Material',
  'Weight',
  'Stock',
  'Price',
];

export const materialFieldMap: Record<string, keyof ProductData> = {
  name: 'name',
  height: 'height',
  material: 'material',
  weight: 'weight',
  stock: 'stock',
  price: 'price',
};
