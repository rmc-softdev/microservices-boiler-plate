import request from 'supertest';
import { app } from '../../app';
import { signupCookieHelper } from '../../test/authHelper'


it('responds with details about the current user', async () => {

  const cookie = await signupCookieHelper()

  const response = await request(app).get('/api/users/currentuser').set('Cookie', cookie).send().expect(200)

  expect(response.body.currentUser.email).toEqual('test@test.com')

})

it('responds with current user being null if not authenticated', async () => {


  const response = await request(app).get('/api/users/currentuser').send().expect(200)

  expect(response.body.currentUser).toEqual(null)

})

