import { UserInterface, Error as err } from '../../interfaces/interfaces'
import { mounter } from '../../utils/treater'
import Auth from './../../helpers/auth'
import Crypto from './../../helpers/crypto'
import User from './../../models/user'

export default class userServices {
  logIn (username: string, password: string) : Promise<any | err> {
    return new Promise((resolve, reject) => {

    })
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
