import express = require('express')
import helmet = require('helmet')
import { urlencoded, json } from 'body-parser'

import env from './env'
import './../helpers/folders'
import logs from './loggify'
import './../db/connection'
import middlewares from './middleware'
import loader from './../api/loader'

const app = express()


app.set('port', env.PORT || 3000)
app.use(helmet())
app.use([...logs, middlewares])
app.use([urlencoded({ extended: true }), json()])
app.use('/api', [...loader()])

app.listen(app.get('port'), () => {
  console.log(`BACKEND is runing on ${app.get('port')}`)
})

export default app
