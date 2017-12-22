import express from 'express'
import { urlencoded, json } from 'body-parser'

import { sucessInfo, generalInfo, errorsInfo } from './loggify'
import middlewares from './middleware'
import env from './env'

const server = express()

server.use(urlencoded({ extended: true }))
server.use(json())
server.use([sucessInfo, generalInfo, errorsInfo, middlewares])

server.set('port', env.values.PORT || 3000)

server.listen(server.set('port'), () => {
  console.log(`BACKEND is runing on http://localhost:${server.set('port')}`)
})

export default server
