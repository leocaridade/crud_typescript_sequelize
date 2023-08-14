import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginMock from '../../mocks/login.mock';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 400 "INVALID_DATA" with a login missing an username', async function () {
    const httpRequestBody = loginMock.noUsernameLoginBody;

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse).to.have.status(400);
    expect(httpResponse.body).to.have.property('message').to.be.equal('"username" and "password" are required');
  });

  it('should return 400 "INVALID_DATA" with a login missing a password', async function () {
    const httpRequestBody = loginMock.noPasswordLoginBody;

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse).to.have.status(400);
    expect(httpResponse.body).to.have.property('message').to.be.equal('"username" and "password" are required');
  });

  it('should return 401 "UNAUTHORIZED" with a login with a non-existing username', async function () {
    const httpRequestBody = loginMock.noExistingUsernameBody;
    sinon.stub(UserModel, 'findOne').resolves(null);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse).to.have.status(401);
    expect(httpResponse.body).to.have.property('message').to.be.equal('Username or password invalid');
  });

  it('should return 200 "SUCCESSFUL" with a valid login body', async function () {
    const httpRequestBody = loginMock.validLoginBody;
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);
    console.log(httpRequestBody);
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    console.log(httpResponse.body)

    expect(httpResponse).to.have.status(200);
    expect(httpResponse.body).to.have.key('token');
  });
});
