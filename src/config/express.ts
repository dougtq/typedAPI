import express from 'express'
import { urlencoded, json } from 'body-parser'

import logs from './loggify'
import middlewares from './middleware'
import env from './env'

const app = express()

app.set('port', env.PORT || 3000)
app.use([urlencoded({ extended: true }), json()])
app.use([...logs, middlewares])

app.listen(app.set('port'), () => {
  console.log(`BACKEND is runing on ${app.set('port')}`)
})

export default app
