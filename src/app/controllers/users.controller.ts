import { Request, Response, Router } from 'express';
import { UserModel } from '../models/user.model';
import { userValidators } from '../validation/user.validators';
import { pick } from 'lodash';
import { genSalt, hash } from 'bcrypto';
import { auth } from '../middleware/auth';

export const router = Router()

router.post('/', async (req: Request, res: Response) => {
  const {error} = userValidators(req.body);

  if (error) {
    res.status(400).json({
      message: null,
      data: null,
      error
    })
  }

  let user: any = await UserModel.findOne({ email: req.body.email });

  if (user) {
    res.status(400).json({
      message: null,
      data: null,
      error
    });
    return;
  }

  user = new UserModel(pick(req.body, ['name', 'email', 'password']));

  const salt = await genSalt(10);
  user.password = await hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();

  res.header('x-auth-token', token).json({
    message: null,
    data: pick(user, ['_id', 'name', 'email']),
    error: null
  })
});


router.get('/me', auth, async (req: Request, res: Response) => {
  const user = await UserModel.findById(req.params.id).select('-password');
  res.status(200).json({
    message: "success",
    data: user,
    error: null
  })
});


router.put('/me', async (req: Request, res: Response) => {
  res.status(404).json({ 
    message: "Not implemented",
    data: null,
    error: null
  })
})


router.delete('/me', async (req: Request, res: Response) => {
  res.status(404).json({ 
    message: "Not implemented",
    data: null,
    error: null
  })
})