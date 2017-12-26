import { sign, verify, decode } from 'jsonwebtoken'

const secretKey : string = process.env.SECRET || 
(Math.floor((Math.random() * 9999) * Math.random())).toString()

export default class Token {
  createToken (payload : any) : string | Boolean {
    try {
      const token = sign(payload, secretKey)
      return `Bearer ${token}`
    } catch (err) {
      return false
    }
  }

  verifyToken (token : string) : Boolean {
    try {
      const valid = verify(this.getRawToken(token), secretKey.toString())
      return Boolean(valid)
    } catch (err) {
      return false
    }
  }

  decodeToken (token : string) : Boolean | any  {
    try {
      const payLoad = decode(this.getRawToken(token))
      return payLoad
    } catch (err) {
      return false
    }
  }

  getRawToken (token : string) : string {
    const rawToken : string = token.split('Bearer').pop().trim()
    return rawToken
  }
}
