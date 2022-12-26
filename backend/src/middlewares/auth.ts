import { NextFunction, Request, Response } from "express";
import jwtService from "../services/jwt.service";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json("Missing authorization header.");
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwtService.verify(token);

    if (decoded.credentials !== "admin") {
      return res.status(401).json("Authorization denied.");
    }

    req.body = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong.");
  }
}

export default authMiddleware;
