import { Product } from '../../src/types/Product';

const validProductFromDB: Product = {
  id: 1,
  name: 'Excalibur',
  price: '10 peças de ouro',
  orderId: 1,
}

const listOfProductsFromDB: Product[] = [
  {
    id: 1,
    name: 'Excalibur',
    price: '10 peças de ouro',
    orderId: 1,
  },
  {
    id: 2,
    name: 'Mjolnir',
    price: '10 peças de ouro',
    orderId: 1,
  },
  {
    id: 3,
    name: 'Stormbreaker',
    price: '10 peças de ouro',
    orderId: 1,
  },
];

export default {
  validProductFromDB,
  listOfProductsFromDB,
};