import { Product } from '@/components/material/product';
import { PurchasingPart } from '@/components/material/purchasing-part';
import { ManufacturingPart } from '@/components/material/manufacturing-part';

export const MATERIAL_TABS = [
  { label: 'Product', component: Product },
  { label: 'Manufacturing part', component: ManufacturingPart },
  { label: 'Purchasing part', component: PurchasingPart },
];
