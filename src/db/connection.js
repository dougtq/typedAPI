import Mongo from 'mongoose'

import { promisifyAll } from 'bluebird'
import Mongo from 'mongoose'

promisifyAll(Mongo)

const Connection = Mongo.connect(process.env.mongo_uri || 'mongodb://localhost/typed', {
  useMongoClient: true
})

export default Connection.then(db => db)