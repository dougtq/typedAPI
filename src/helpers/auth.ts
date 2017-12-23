import { sign, verify, decode } from 'jsonwebtoken'

const secretKey = process.env.SECRET || Math.floor((Math.random() * 9999) * Math.random())

export default class Token {
  createToken (payload : any) : String | Boolean {
    try {
      const token = sign(payload, secretKey, { expiresIn: 60 * 60 * 15 })
      return `Bearer ${token}`
    } catch (err) {
      return false
    }
  }

  verifyToken (token : String) : Boolean {
    try {
      const valid = verify(this.getRawToken(token), secretKey.toString())
      return Boolean(valid)
    } catch (err) {
      return false
    }
  }

  decodeToken (token : String) : Boolean | any  {
    try {
      const payLoad = decode(this.getRawToken(token))
      return payLoad
    } catch (err) {
      return false
    }
  }

  getRawToken (token : String) : String {
    const rawToken : String = token.split('Bearer').pop().trim()
    return rawToken
  }
}
