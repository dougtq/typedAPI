import { Router, Request, Response } from 'express'

import userService from './../services/userServices'

const User : Router = Router()
const sUser : userService = new userService()

User.get('/user/:_id', (req : Request, res : Response) => {
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
  const { username, password } = req.body

  if (!username || !password) 
    return res.send({ success: false, message: 'Username or Password not found!' })
  
  const data = sUser.logIn({ username, password })
  res.setHeader('Authorization', data.token)
  res.send({
    sucess: true,
    message: 'You\'re logged in!'
  })
})

export default User
