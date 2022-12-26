import jwt from "jsonwebtoken";

export interface IUserPayload {
  id: string;
  name: string;
  credentials: string;
}

class JwtService {
  sign(payload: IUserPayload): string {
    const { id, name, credentials } = payload;
    return jwt.sign(
      { id: id, name: name, credentials: credentials },
      process.env.JWT_SECRET as string,
      {
        expiresIn: process.env.JWT_TOKEN_LIFE,
      }
    ) as string;
  }

  verify(token: string): IUserPayload {
    return jwt.verify(
      token,
      process.env.SECRET as string
    ) as unknown as IUserPayload;
  }
}

export default new JwtService();
