import app from './config/express'
import { getEnvValues } from './config/env'

const env = getEnvValues()
const port = Number(process.env.PORT) || 3000

app.set('port', port)
app.listen(port, () => {
  console.info(`BACK-END is runing on ${port}`)
})
