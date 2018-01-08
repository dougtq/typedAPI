import { sign, verify, decode } from 'jsonwebtoken'

const secretKey : string = process.env.SECRET || 
(Math.floor((Math.random() * 9999) * Math.random())).toString()

export default class Token {
  static createToken (payload : any) : string | Boolean {
    try {
      const token = sign(payload, secretKey)
      return `Bearer ${token}`
    } catch (err) {
      return false
    }
  }

  static verifyToken (token : string) : Boolean {
    try {
      const valid = verify(Token.getRawToken(token), secretKey.toString())
      return Boolean(valid)
    } catch (err) {
      return false
    }
  }

  static decodeToken (token : string) : Boolean | any  {
    try {
      const payLoad = decode(Token.getRawToken(token))
      return payLoad
    } catch (err) {
      return false
    }
  }

  static getRawToken (token : string) : string {
    const rawToken : string = token.split('Bearer').pop().trim()
    return rawToken
  }
}
