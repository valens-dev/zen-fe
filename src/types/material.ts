export enum MaterialType {
  Product = 'product',
  ManufacturingPart = 'ManufacturingPart',
  PurchasingPart = 'PurchasingPart',
}

export interface IAttribute {
  name: string;
  option: string;
}

export interface IValue {
  name: string;
  value: number;
  unit: string;
  toleranceMin: number;
  toleranceMax: number;
}

export interface IProductData {
  id: number;
  typeId: string;
}
export interface IMaterial {
  id: number;
  name: string;
  type: MaterialType;
  values: IValue[];
  attributes: IAttribute[];
  weight: number;
  materialNumber: string;
  netPrice: number;
  VAT: number;
  customsTarif: string;
  description: string;
  image: object;
  packaging: boolean;
  manufacturingPart?: IProductData;
  purchasingPart?: IProductData;
  product?: IProductData;
}

export interface IComponent {
  id: number;
  quantity: number;
  unitType: string;
  name: string;
  imageUrl: object;
  duration: number;
  type: MaterialType;
  manufacturingParts?: IProductData;
  purchasingParts?: IProductData;
}
