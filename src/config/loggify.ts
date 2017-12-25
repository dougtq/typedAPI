import { createWriteStream, WriteStream } from 'fs'
import { join } from 'path'
import morgan = require('morgan')

const sucessLog : WriteStream = createWriteStream(join(__dirname, '../../logs/success.log'), { flags: 'a' })
const errorsLog : WriteStream = createWriteStream(join(__dirname, '../../logs/error.log'), { flags: 'a' })
const generalLog : WriteStream = createWriteStream(join(__dirname, '../../logs/general.log'), { flags: 'a' })

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
