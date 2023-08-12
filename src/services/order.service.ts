import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

interface OrderWithProductIds {
  dataValues: {
    id: number;
    userId: number;
    productIds: { dataValues: { id: number } }[];
  };
}

async function getAll(): Promise<Order[]> {
  const ordersWithProductIds = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  }) as unknown as OrderWithProductIds[];

  const orders = ordersWithProductIds.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds.map((product) => product.dataValues.id),
  }));

  return orders;
}

export default {
  getAll,
};