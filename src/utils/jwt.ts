import jwt from 'jsonwebtoken';
const secretKey = process.env.JWT_SECRET_KEY!;

export const jwtUtils = () => {
  // access Token 발급
  const sign = (userId: string) => {
    return jwt.sign({ id: userId }, secretKey, {
      algorithm: 'HS256',
      expiresIn: '1h',
    });
  };

  // access Token 검증
  const verify = (token: string) => {
    let decoded: any = null;
    try {
      decoded = jwt.verify(token, secretKey);
      return {
        ok: true,
        userId: decoded.id,
      };
    } catch (error: any) {
      return {
        ok: false,
        message: error.message,
      };
    }
  };

  // refresh Token 발급
  const refresh = (userId: string) => {
    return jwt.sign({ id: userId }, secretKey, {
      algorithm: 'HS256',
      expiresIn: '15d',
    });
  };

  const refreshVerify = (token: string) => {
    try {
      jwt.verify(token, secretKey);
      return true;
    } catch (error) {
      return false;
    }
  };

  return { sign, verify, refresh, refreshVerify };
};
