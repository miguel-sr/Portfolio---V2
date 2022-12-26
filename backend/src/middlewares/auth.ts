import { NextFunction, Request, Response } from "express";
import getCache from "../services/cache.service";
import jwtService from "../services/jwt.service";

async function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const redisClient = await getCache();
    if (!req.headers.authorization) {
      return res.status(400).json("Missing authorization header.");
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    const inDenyList = await redisClient.get(`bl_${token}`);
    if (inDenyList) {
      return res.status(401).json("Authorization denied.");
    }

    const decoded = jwtService.verify(token);

    if (decoded.credentials !== "admin") {
      return res.status(401).json("Authorization denied.");
    }

    next();
  } catch (error) {
    return res.status(401).json("Authorization denied.");
  }
}

export default auth;
