import { PasswordManager } from '../services/PasswordManager';
import express, { Request, Response } from 'express';
import { body } from 'express-validator'
import jwt from 'jsonwebtoken'


import {validateRequest} from '../middlewares/validate-request'
import {User} from '../models/user'
import { BadRequestError } from './../errors/bad-request-error';


const router = express.Router();

router.post('/api/users/signin',[
  body("email").isEmail().withMessage('Email must be valid'),
  body("password").trim().notEmpty().withMessage("Please supply a password")
  
], validateRequest , async (req: Request, res: Response) => {

  const {email, password} = req.body

  const existingUser = await User.findOne({email})

  if (!existingUser) {
    throw new BadRequestError('Invalid credentials')
  }

  const passwordsMatch = await PasswordManager.compare(existingUser.password, password)

  if (!passwordsMatch) {
    throw new BadRequestError('Invalid credentials')
  }

  const userJwt = jwt.sign({
    id: existingUser.id,
    emal: existingUser.email
  }, process.env.JWT_KEY!)

  req.session = {
    jwt: userJwt
  }

  res.status(201).send(existingUser);

});

export { router as signinRouter };
