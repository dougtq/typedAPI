import Auth from './../../helpers/auth'
import Crypto from './../../helpers/crypto'


export default class userServices {
  constructor () {}
  
  logIn (payload) : any {
    const password : string = payload.password
    const username : string = payload.username
    const token : string | Boolean = Auth.createToken({ username })
    const cryptoPass : string = Crypto.createMd5(password)

    return { token, pass: cryptoPass }
  }

  logOut (id) {

  }

  create (payload) {

  }

  deactivate (id) {

  }

}
