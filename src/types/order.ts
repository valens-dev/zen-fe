import { type IPosition } from '@/components/order/order-form/types';

export interface IOrder {
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
  positions: IPosition[];
  customerName: string;
  shipment: {
    shippingMethod: string;
    incotermId: number;
  };
}
