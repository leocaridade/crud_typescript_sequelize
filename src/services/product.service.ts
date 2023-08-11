import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function create(product: ProductInputtableTypes): Promise<Product> {
  const newProduct = await ProductModel.create(product);

  return newProduct.dataValues;
}

async function getAll(): Promise<Product[]> {
  const allProducts = await ProductModel.findAll();

  return allProducts.map((product) => product.dataValues);
}

export default {
  create,
  getAll,
};