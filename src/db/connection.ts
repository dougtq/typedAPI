import Mongo = require('mongoose')

Mongo.Promise = require('bluebird')

Mongo.connect(process.env.mongo_uri || 'mongodb://localhost/typed', {
  useMongoClient: true
})

export default Mongo
