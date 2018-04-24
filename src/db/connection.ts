import Mongo from 'mongoose'

Mongo.Promise = global.Promise

Mongo.connect(process.env.MONGO_URI || 'mongodb://localhost/typed', {
  useMongoClient: true
})

export default Mongo
