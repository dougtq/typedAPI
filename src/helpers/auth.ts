import { sign, verify, decode } from 'jsonwebtoken'

import { mounter } from '../utils/treater'
import { Error } from  '../interfaces/interfaces'

const secretKey : string = process.env.SECRET ||
(Math.floor((Math.random() * 9999) * Math.random())).toString()

export default class Token {
 
  static createToken (payload : any) : string | Error {
    try {
      const token = sign(payload, secretKey)
      return `Bearer ${token}`
    } catch (err) {
      return mounter('An error happened while creating your token, try again.')
    }
  }

  static verifyToken (token : string) : Boolean | Error {
    try {
      const valid = verify(Token.getRawToken(token), secretKey.toString())
      return Boolean(valid)
    } catch (err) {
      return mounter('Your token verification failed, try again with a new session')
    }
  }

  static decodeToken (token : string) : string | Object | Error  {
    try {
      const payLoad = decode(Token.getRawToken(token))
      return payLoad
    } catch (err) {
      return mounter('Your token verification failed, try again with a new session')
    }
  }

  static getRawToken (token : string) : string {
    const rawToken : string = token.split('Bearer').pop().trim()
    return rawToken
  }
}
