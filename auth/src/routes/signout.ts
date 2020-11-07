import express from 'express'

const router=  express.Router()

router.post('/api/users/signout', (req, res) => {
  res.send('harooo')
})


export {router as SignOutRouter}