import { createHash } from 'crypto'
import bcrypt = require('bcrypt')

export default class Hasher {
  static createMd5 (toBeHashed : string | Buffer) : string {
    return createHash('md5')
    .update(toBeHashed)
    .digest('hex')
  }

  static createBcrypt (toBeHashed : string) : string {
    return bcrypt.hash(toBeHashed, 10)
    .then(hashed => hashed)
    .catch((err) => {
      return false
    })
  }
}
