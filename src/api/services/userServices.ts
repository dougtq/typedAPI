import Auth from './../../helpers/auth'
import Crypto from './../../helpers/crypto'

const auth : Auth = new Auth()
const crypto : Crypto = new Crypto()

export default class userServices {
  logIn (payload) : any {
    const password : string = payload.password
    const username : string = payload.username
    const token : string | Boolean = auth.createToken({ username })
    const cryptoPass : string = crypto.create(password)

    return { token, pass: cryptoPass }
  }

  logOut (id) {

  }

  create (payload) {

  }

  deactivate (id) {

  }

}
