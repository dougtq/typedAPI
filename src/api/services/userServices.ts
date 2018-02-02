import Auth from './../../helpers/auth'
import Crypto from './../../helpers/crypto'
import User from './../../models/user'

export default class userServices {
  logIn (payload) : any {
    
    const password : string = payload.password
    const username : string = payload.username
    const token : string | Boolean = Auth.createToken({ username })
    const pass : string = Crypto.createMd5(password)

    if (token) {
      User.find({
        username
      }).then((person : any) => {  
        if (person === {}) return undefined 
        return person
      })
    }
 
    return { token: null, user: undefined }
  }

  logOut (id) {

  }

  create (payload) {

  }

  deactivate (id) {

  }

}
