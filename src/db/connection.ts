import Mongo = require('mongoose')
import bluebird = require('bluebird')

Mongo.Promise = global.Promise

const Connection = Mongo.connect(process.env.mongo_uri || 'mongodb://localhost/typed', {
  useMongoClient: true
})

export default Connection.then(db => db).catch((err) => { 
  console.error(err) 
  process.exit(1)
})
