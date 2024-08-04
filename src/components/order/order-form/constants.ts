import { type IFormInputs } from './types';

export const initialValues: IFormInputs = {
  deliveryAdress: {
    houseNumber: '',
    street: '',
    zipCode: '',
    place: '',
    countryId: 0,
    adressSufix: '',
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
