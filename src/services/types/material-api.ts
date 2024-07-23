export interface IProduct {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  type: string;
  numberOfAttributes: number;
  numberOfValues: number;
  weight: string;
  totalNumberOfBomItems: number;
  materialNumber: string;
  netPrice: string;
  VAT: string;
  customsTarif: string;
  description: string;
  packaging: boolean;
  product: {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    typeId: string;
  };
  attributes: {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    name: string;
    option: string;
  }[];
  values: {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    name: string;
    value: string;
    unit: string;
    toleranceMin: string;
    toleranceMax: string;
  }[];
}

export interface IMaterialApiResponse {
  data: IProduct[];
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

export interface IApiParams {
  page?: number;
  limit?: number;
  attributeName?: string;
  attributeOption?: string[];
  valueName?: string;
  valueFrom?: number;
  valueTo?: number;
  name?: string;
  weight?: number;
  netPrice?: number;
  type: 'product' | 'ManufacturingPart' | 'PurchasingPart';
  sortFields?: string[];
  sortFieldsOrders?: string[];
  sortAttributes?: string[];
  sortAttributesOrders?: string[];
  valueNames?: string[];
  valueSortOrders?: string[];
}
