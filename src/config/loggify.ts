import { createWriteStream, WriteStream } from 'fs'
import { join } from 'path'
import morgan = require('morgan')

const success = '../../logs/success.log'
const errors = '../../logs/errors.log'
const general = '../../logs/general.log'

const sucessLog : WriteStream = createWriteStream(join(__dirname, success), { flags: 'a' })
const errorsLog : WriteStream = createWriteStream(join(__dirname, errors), { flags: 'a' })
const generalLog : WriteStream = createWriteStream(join(__dirname, general), { flags: 'a' })

const logFormat : String = ':method :url :status :res[content-length] - :response-time ms'

const sucessInfo = morgan(logFormat,{ 
  skip: (req, res) => { 
    return res.statusCode > 299 
  }, stream: sucessLog })

const errorsInfo = morgan(logFormat, { 
  skip: (req, res) => { 
    return res.statusCode < 300 
  }, stream: errorsLog 
})

const generalInfo = morgan(logFormat, { stream: generalLog })

export default [sucessInfo, errorsInfo, generalInfo]
