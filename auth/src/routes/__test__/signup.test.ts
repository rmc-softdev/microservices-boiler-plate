import request from 'supertest';
import { app } from '../../app';

describe('Requests with invalid inputs', () => {
  it('returns a 400 with invalid email, but valid password', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
          email: 'testtest.com',
          password: 'password'
        })
        .expect(400)
  })
  
  it('returns a 400 with an invalid password, but valid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
          email: 'test@test.com',
          password: '123'
        })
        .expect(400)
  })
  
  it('returns a 400 with invalid email and password', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
        })
        .expect(400)

    return request(app)
    .post('/api/users/signup')
    .send({
      email: '',
      password: ''
    })
    .expect(400)
  })

})


describe('checking for an existing user in the database', () => {
  it('returns 400 when the same email has already been used', async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '123456'
    })
    .expect(201)
  
    await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '123456'
    })
    .expect(400)  
  })
})

describe('Registers a user in the database', () => {
  it('returns a 201 on successful signup', async () => {
    return request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: '123456'
      })
      .expect(201);
  });
})

describe('Cookie/JWT auth after a successful signup', () => {

  it('sets a cookie after sucessful signup', async () => {
    const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '123456'
    })
    .expect(201)

    expect(response.get('Set-Cookie')).toBeDefined()

  })

})