import { Error } from '../interfaces/interfaces'

export function treater (message : string) : Error {
  const err = {
    data: {
      message: '',
      code: ''
    },
    status: 500
  }

  switch (message) {
    case 'not found':
      err.data.message = 'The data your searching could not be found'
      err.data.code = 'NOT_FOUND',
      err.status = 404

      break

    case 'create error':
      err.data.message = 'Your payload could not be inserted in the dabase, try again later',
      err.data.code = 'CREATE_ERROR',
      err.status = 500
      break

    case 'encrypt error':
      err.data.message = 'Your payload could not be handled, try again later',
      err.data.code = 'PWD_ERROR',
      err.status = 400
      break

    case 'duplicate username':
      err.data.message = 'This username is taken',
      err.data.code = 'DUPLICATE_ERROR',
      err.status = 400
      break

    case 'incorrect session':
      err.data.message = 'Invalid user/password data',
      err.data.code = 'SESSION_ERROR',
      err.status = 400
      break

    default:
      err.data.message = message,
      err.data.code = 'UNEXPECTED_ERR',
      err.status = 500
      break
  }

  return err
}

export function mounter (message: string = '', code: string = 'UNKNOWN_ERR', status: number = 500) : Error {
  const err = {
    data: {
      message,
      code
    },
    status
  }

  return err
}
