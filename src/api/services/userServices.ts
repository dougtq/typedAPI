import { UserInterface, Error as err } from '../../interfaces/interfaces'
import { mounter } from '../../utils/treater'
import Auth from './../../helpers/auth'
import Crypto from './../../helpers/crypto'
import User from './../../models/user'

export default class userServices {
  logIn (payload) : any {
    
    const password : string = payload.password
    const username : string = payload.username
    const token : string | err = Auth.createToken({ username })
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

  create (payload : UserInterface): Promise<UserInterface | err> {
    return new Promise((resolve, reject) => {
      User.create(payload)
        .then((data : any) : void => {
          return resolve(data)
        })
        .catch((err : Error) : void => {
          return reject(mounter(err.message))
        })
    })
  }

  forgotPassword (email: string) {

  }

  deactivate (id : string) {

  }

}
