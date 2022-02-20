import { Request, Response, Router } from "express";
import { UserModel } from "../models/user.model";
import { compare } from 'bcrypto';
import { authValidators} from '../validation/auth.validators';

export const router = Router();

router.post('/', async(req: Request, res: Response) => {
  
})