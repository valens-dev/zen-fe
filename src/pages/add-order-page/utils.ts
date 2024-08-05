import { type IPosition } from '@/components/order/order-form/types';

import { MaterialType, type IMaterialOrder } from '@/types/material';

export function transformProductsToPositions(
  products: IMaterialOrder[],
): IPosition[] {
  return products.map((product) => {
    return {
      productId: product.type === MaterialType.Product ? product.id : undefined,
      manufacturingPartId:
        product.type === MaterialType.ManufacturingPart
          ? product.id
          : undefined,
      quantity: product.quantity ?? 1,
      unit: 'Stk',
      netPrice: Number(product.netPrice),
      useInventory: product.useInventory || false,
    };
  });
}
