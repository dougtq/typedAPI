import { Router, Request, Response } from 'express'

const User : Router = Router()

User.get('/user', (req : Request, res : Response) => {
  res.send({
    sucess: true
  })
})

User.post('/user', (req : Request, res : Response) => {
  res.send({
    sucess: true,
    body: req.body
  })
})

User.post('/user/auth', (req : Request, res : Response) => {
  res.send({
    sucess: true,
    body: req.body
  })
})

export default User
