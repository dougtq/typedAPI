import Mongo = require('mongoose')
import bluebird = require('bluebird')

bluebird.promisifyAll(Mongo)

const Connection = Mongo.connect(process.env.mongo_uri || 'mongodb://localhost/typed', {
  useMongoClient: true
})

export default Connection.then(db => db)
