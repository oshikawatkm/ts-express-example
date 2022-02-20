import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import config from 'config';

export function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({
          message: "Access denied. No token provided.",
          data: null,
          error: null
        });
    }

    try {
        req.user = verify(token, config.get('jwtPrivateKey'));
        next();
    }
    catch (error) {
        res.status(400).json({
          message: "Invalid token",
          data: null,
          error
        });
    }
}