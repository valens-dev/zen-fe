import { type IFormInputs } from './types';

export const initialValues: IFormInputs = {
  deliveryAddress: {
    houseNumber: '',
    street: '',
    zipCode: 0,
    place: '',
    countryId: 0,
    addressSufix: '',
  },
  dateOfDelivery: '',
  comment: '',
  prioritizeOrder: false,
  positions: [],
  customerName: '',
  shipment: {
    shippingMethod: '',
    incotermId: 0,
  },
};
