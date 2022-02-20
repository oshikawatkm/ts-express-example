import { Request, Response, NextFunction } from "express";

export function admin(req: Request, res: Response, next: NextFunction) {
  if(!req.user.isAdmin) {
    return res.status(403).json({
      message: "Access denied",
      data: null,
      error: null
    })
  }

  next();
}