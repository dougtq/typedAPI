import { Router, Request, Response } from 'express'

import Jwt from './../../helpers/auth'

const User : Router = Router()
const Auth : Jwt = new Jwt()

User.get('/user', (req : Request, res : Response) => {
  res.send({
    sucess: true
  })
})

User.post('/user', (req : Request, res : Response) => {
  res.send({
    sucess: true,
    message: 'User account created!!'
  })
})

User.post('/user/auth', (req : Request, res : Response) => {
  const { username } = req.body
  
  if (!username) return res.send({ success: false, message: 'Username not found!' })
  res.setHeader('Authorization', Auth.createToken(username))
  res.send({
    sucess: true,
    message: 'You\'re logged in!'
  })
})

export default User
