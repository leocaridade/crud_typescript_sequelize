import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: number,
  username: string,
};

function sign(payload: TokenPayload): string {
  return jwt.sign(payload, secret, { expiresIn: '1d' });
}

function verify(token: string): TokenPayload {
  return jwt.verify(token, secret) as TokenPayload;
}

export default {
  sign,
  verify,
};