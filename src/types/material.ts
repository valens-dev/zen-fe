export enum MaterialType {
  Product = 'product',
  ManufacturingPart = 'ManufacturingPart',
  PurchasingPart = 'PurchasingPart',
}

export interface IAttribute {
  id: number;
  name: string;
  option: string;
}

export interface IValue {
  option: string;
  id: number;
  name: string;
  value: string;
  unit: string;
  toleranceMin: string;
  toleranceMax: string;
}

export interface IMaterial {
  name: string;
  type: string;
  values: IValue[];
  attributes: IAttribute[];
  weight: number;
  materialNumber: string;
  netPrice: number;
  VAT: number;
  customsTarif: number;
  description: string;
  image: string;
  packaging: boolean;
}

export interface IMaterialsResponse {
  data: IMaterial[];
  page: string;
  limit: string;
  totalCount: number;
  totalPages: number;
}

export interface IProduct {
  imageUrl: string;
  height: string;
  material: string;
  type: string;
  name: string;
  price: string;
  stock: string;
  weight: string;
}
