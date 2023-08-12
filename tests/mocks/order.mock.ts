import { Order } from '../../src/types/Order';

const validOrdersWithProductIdsFromDB: Order[] = [
  {
    id: 1,
    userId: 1,
    productIds: [1, 2],
  },
  {
    id: 2,
    userId: 2,
    productIds: [3, 4],
  },
];

export default {
  validOrdersWithProductIdsFromDB,
}