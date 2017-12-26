import { createHash } from 'crypto'

export default class Hasher {
  create (toBeHashed : string | Buffer) : string {
    return createHash('md5')
    .update(toBeHashed)
    .digest('hex')
  }
}
