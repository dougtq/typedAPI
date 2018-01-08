import { createHash } from 'crypto'
import bcrypt = require('bcrypt')

export default class Hasher {
  static createMd5 (toBeHashed : string | Buffer) : string {
    return createHash('md5')
    .update(toBeHashed)
    .digest('hex')
  }
  
  static compareMd5 (text, hashed  : string) : boolean {
    return (hashed === Hasher.createMd5(text))
  }

  static createBcrypt (toBeHashed : string) : string {
    return bcrypt.hash(toBeHashed, 10)
    .then(hashed => hashed)
    .catch((err) => {
      return false
    })
  }

  static compareBcrypt (text, hashed  : string) : boolean {
    return bcrypt.compare(text, hashed).then((result : boolean) => result)
    .catch(err => undefined)
  }

}
