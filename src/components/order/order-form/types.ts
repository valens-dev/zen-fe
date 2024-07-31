interface IPosition {
  productId: number;
  manufacturingPartId: number;
  quantity: number;
  unit: string;
  netPrice: number;
  useInventory: boolean;
}

export interface IFormInputs {
  name: string;
  adress: string;
  countryId: number;
  street: string;
  houseNumber: string;
  zipCode: string;
  place: string;
  dateOfDelivery: string;
  comment: string;
  prioritizeOrder: boolean;
  positions: IPosition[];
  shippingMethod: string;
  incotermId: number;
}
