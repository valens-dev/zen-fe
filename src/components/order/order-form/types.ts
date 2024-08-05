import { type IMaterialOrder } from '@/types/material';

export interface IPosition {
  productId?: number;
  manufacturingPartId?: number;
  quantity: number;
  unit: string;
  netPrice: number;
  useInventory: boolean;
  name?: string;
}

export interface IFormInputs {
  deliveryAddress: {
    houseNumber: string;
    street: string;
    zipCode: number;
    place: string;
    countryId: number;
    addressSufix: string;
  };
  dateOfDelivery: string;
  comment: string;
  prioritizeOrder: boolean;
  positions: IMaterialOrder[];
  customerName: string;
  shipment: {
    shippingMethod: string;
    incotermId: number;
  };
}
