import { createWriteStream } from 'fs'
import { join } from 'path'
import morgan from 'morgan'

const sucessLog = createWriteStream(join(__dirname, '../../logs/sucess.log'), { flags: 'a' })
const errorsLog = createWriteStream(join(__dirname, '../../logs/errors.log'), { flags: 'a' })
const generalLog = createWriteStream(join(__dirname, '../../logs/general.log'), { flags: 'a' })

const logFormat = ':method :url :status :res[content-length] - :response-time ms'

const sucessInfo = morgan(logFormat,{ 
  skip: (req, res) => { 
    return res.statusCode > 299 
  }, stream: sucessLog })

const errorsInfo = morgan(`${logFormat} --`, { 
  skip: (req, res) => { 
    return res.statusCode < 300 
  }, stream: errorsLog 
})

const generalInfo = morgan(logFormat, { stream: generalLog })

export default [sucessInfo, errorsInfo, generalInfo]
