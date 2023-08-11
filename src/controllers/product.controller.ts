import { Request, Response } from 'express';
import productService from '../services/product.service';

async function create(req: Request, res: Response) {
  const newProduct = await productService.create(req.body);

  return res.status(201).json(newProduct);
}

export default {
  create,
};