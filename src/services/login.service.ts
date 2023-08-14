import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt.util';
import User from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

async function verifyLogin({ username, password }: Login): Promise<ServiceResponse<Token>> {
  if (!username || !password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }

  const user = await User.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const token = jwtUtil.sign({ id: user.dataValues.id, username: user.dataValues.username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  verifyLogin,
};