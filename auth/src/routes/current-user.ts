import express from 'express'

const router=  express.Router()

router.get('/api/users/currentuser', (req, res) => {
  res.send('harooo')
})

export {router as CurrentUserRouter}