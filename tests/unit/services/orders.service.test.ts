import { expect } from 'chai';
import sinon from 'sinon';
import orderService from '../../../src/services/order.service';
import orderMock from '../../mocks/order.mock';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('deve ser possível listar todos os pedidos com sucesso', async function () {
    sinon.stub(orderService, 'getAll').resolves(orderMock.validOrdersWithProductIdsFromDB);

    const orders = await orderService.getAll();

    expect(orders).to.deep.eq(orderMock.validOrdersWithProductIdsFromDB);

  });
});
