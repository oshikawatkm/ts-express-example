import { Request, Response, Router } from "express";

export const router = Router();

router.get('/',  (req: Request, res: Response) => {
  res.render('index', {
    title: 'index',
    message: 'hello world'
  })
})