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
  value: string;
  unit: string;
  toleranceMin: number;
  toleranceMax: number;
}

export interface IProductData {
  id?: number;
  quantity: number;
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

export interface IMaterialWithQuantity extends IMaterial {
  quantity: number;
}

export interface IComponentDetails {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  typeId: string;
  material: IMaterialWithQuantity;
}

export interface IGetMaterialById extends IMaterial {
  materialDto: IMaterial;
  materialParts: IComponentDetails[];
}
