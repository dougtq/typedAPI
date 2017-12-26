import Auth from './../../helpers/auth'
import Crypto from './../../helpers/crypto'

const auth : Auth = new Auth()
const crypto : Crypto = new Crypto()

export default class userServices {
  logIn (payload) {
    const password : string = payload.password
    const username : string = payload.username
    const token : string | Boolean = auth.createToken({ username })
    const cryptoPass : string = crypto.create(password)
  }

  logOut (id) {

  }

  create (payload) {

  }

  deactivate (id) {

  }

}
