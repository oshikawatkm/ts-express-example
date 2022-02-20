import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';

export function validateObjectId(req: Request, res: Response, next: NextFunction) {
  if (!Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({
      message: "Invalid id",
      data: null,
      error: null
    });
  }

  next();
}