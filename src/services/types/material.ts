export enum ProductType {
  Product = 'product',
  ManufacturingPart = 'manufacturing-part',
  PurchasingPart = 'purchasing-part',
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
