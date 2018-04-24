import { Request, Response, NextFunction } from 'express'

import { Error as error } from '../interfaces/interfaces'
import { mounter } from './treater'
import Jwt from '../helpers/auth'

export const userCheckers = (req: Request, res: Response, next: NextFunction) => {
	const { name, email, password } = req.body
	if (!name || !email || !password) {

    const errorMsg = mounter('missing data from the payload', 'INCORRECT_PAYLOAD', 400)
    return res.status(400).send({
			data: {
				message: errorMsg.data.message,
				code: errorMsg.data.code
			},
			status: errorMsg.status
		})
	}
	next()
}

export const sessionCheckers = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers

		const token = authorization.toString()

    if (!authorization) {
      const errorMsg = mounter('missing session token', 'MISSING_TOKEN', 400)
      return res.status(errorMsg.status).send({
        data: {
          message: errorMsg.data.message,
          code:  errorMsg.data.code
        },
        status: errorMsg.status
      })
    }

    if (Jwt.verifyToken(token)) {
      return res.status(400).send({
        data: {
          message: 'invalid token data',
          code: 'INVALID_TOKEN'
        },
        status: 400
      })
    }
		const decodedToken : any = Jwt.decodeToken(token)
    req.headers.userSession = decodedToken.id
    next()
  } catch(err) {

  }
}

export const loginCheckers = (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body

	if (!email || !password) {
		return res.status(400).send({
			data: {
				message: 'missing data from the payload',
				code: 'INCORRECT_PAYLOAD'
			},
			status: 400
		})
	}

	next()
}

export const taskCheckers = (req: Request, res: Response, next: NextFunction) => {
	const { title } = req.body
	if (!title) {
		return res.status(400).send({
			data: {
				message: 'missing title from the payload',
				code: 'INCORRECT_PAYLOAD'
			},
			status: 400
		})
	}
	next()
}
