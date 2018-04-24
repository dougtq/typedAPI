import * as express from 'express'
import * as helmet from 'helmet'
import { urlencoded, json } from 'body-parser'

import './../helpers/folders'
import logs from './loggify'
import './../db/connection'
import middlewares from './middleware'
import loader from './../api/loader'

class Server {
  public express : express.Application

  constructor () {
    this.express = express()
    this.middleware()
  }

  private middleware(): void {
    this.express.use([json(), urlencoded({ extended: true })])
    this.express.use(helmet())
    this.express.use([...logs, middlewares])
    this.express.use('/api', [...loader()])
    this.express.use('/health', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send({ working: true })
    })
  }
}


export default new Server().express
