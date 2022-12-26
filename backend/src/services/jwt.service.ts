import jwt from "jsonwebtoken";

export interface IUserPayload {
  id: string;
  name: string;
  credentials: string;
  iat: number;
  exp: number;
}

class JwtService {
  sign(payload: IUserPayload): string {
    const { id, name, credentials } = payload;
    try {
      return jwt.sign(
        { id: id, name: name, credentials: credentials },
        process.env.JWT_SECRET as string,
        {
          expiresIn: process.env.JWT_TOKEN_LIFE,
        }
      ) as string;
    } catch (error) {
      throw new Error("Error: " + error);
    }
  }

  verify(token: string): IUserPayload {
    try {
      return jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as unknown as IUserPayload;
    } catch (error) {
      throw new Error("Error: " + error);
    }
  }
}

export default new JwtService();
