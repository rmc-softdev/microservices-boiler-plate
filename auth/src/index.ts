import express from 'express';
import { json } from 'body-parser';

import {CurrentUserRouter} from './routes/current-user'
import {SignInRouter} from './routes/signin'
import {SignOutRouter} from './routes/signout'
import {SignUpRouter} from './routes/signup'
import {errorHandler} from './middlewares/error-handler'
const app = express();

app.use(json());

app.use(CurrentUserRouter)
app.use(SignInRouter)
app.use(SignOutRouter)
app.use(SignUpRouter)

app.use(errorHandler)

app.listen(3000, () => {
  console.log('Listening on port 3000!!!!!!!!');
});
