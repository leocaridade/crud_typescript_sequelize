import { Request, Response } from 'express';
import productService from '../services/product.service';

async function create(req: Request, res: Response) {
  const newProduct = await productService.create(req.body);

  return res.status(201).json(newProduct);
}

async function getAll(req: Request, res: Response) {
  const allProducts = await productService.getAll();

  return res.status(200).json(allProducts);
}

export default {
  create,
  getAll,
};