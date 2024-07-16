export enum MaterialType {
  ManufactoringPart = 'manufactoring-part',
  Product = 'product',
  PurchasingPart = 'purchasing-part',
}

export interface IProduct {
  imageUrl: string;
  height: string;
  material: string;
  materialType: MaterialType;
  name: string;
  price: string;
  stock: string;
  weight: string;
}
