import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productController from '../../../src/controllers/product.controller';
import productService from '../../../src/services/product.service';
import productMock from '../../mocks/product.mock';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('deve ser possível criar um produto com sucesso', async function () {
    req.body = { name: 'Excalibur', price: '10 peças de ouro', orderId: 1 };
    sinon.stub(productService, 'create').resolves(productMock.validProductFromDB);

    await productController.create(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productMock.validProductFromDB);
  }
  );
});
