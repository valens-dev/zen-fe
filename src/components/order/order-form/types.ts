export interface IPosition {
  productId: number;
  manufacturingPartId: number;
  quantity: number;
  unit: string;
  netPrice: number;
  useInventory: boolean;
  name: string;
}

export interface IFormInputs {
  deliveryAdress: {
    houseNumber: string;
    street: string;
    zipCode: string;
    place: string;
    countryId: number;
    adressSufix: string;
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
