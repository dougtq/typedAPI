import { createHash } from 'crypto'

export default class Hasher {
  create (toBeHashed : string | Buffer) : String {
    return createHash('md5')
    .update(toBeHashed)
    .digest('hex')
  }
}
