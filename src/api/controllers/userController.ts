import { Router, Request, Response } from 'express'

import userService from './../services/userServices'

const User = Router()
const sUser = new userService()

User.get('/user/:_id', (req : Request, res : Response) => {
  const { password, username } = req.body

  res.status(200).send({
    sucess: sUser.logIn({ password, username })
  })
})

User.post('/user', (req : Request, res : Response) => {
  res.status(201).send({
    sucess: true,
    message: 'User account created!!'
  })
})

User.post('/user/auth', (req : Request, res : Response) => {
  const { username, password } = req.body

  if (!username || !password)
    return res.send({ success: false, message: 'Username or Password not found!' })

  sUser.logIn({ username, password })
    .then((data : string) => {
      res.setHeader('Authorization', data)
    })
    .catch(() => {})
  res.send({
    sucess: true,
    message: 'You\'re logged in!'
  })
})

export default User
