import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service'
import productMock from '../../mocks/product.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('deve ser possível criar um produto com sucesso', async function () {
    const mockCreateReturn = ProductModel.build(productMock.validProductFromDB);
    sinon.stub(ProductModel, 'create')
      .resolves(mockCreateReturn);

    const serviceResponse = await productService.create(productMock.validProductFromDB);

    expect(serviceResponse).to.deep.eq(productMock.validProductFromDB);
  });
});
