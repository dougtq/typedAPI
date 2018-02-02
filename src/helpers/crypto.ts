import { createHash } from 'crypto'
import bcrypt from 'bcrypt'

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
    return bcrypt.hashSync(toBeHashed, 10)
  }

  static compareBcrypt (text, hashed  : string) : boolean {
    return bcrypt.compareSync(text, hashed)
  }

}
