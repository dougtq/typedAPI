import Mongo from 'mongoose'

const Connection = Mongo.connect(process.env.mongo_uri || 'mongodb://localhost/typed', {
  useMongoClient: true
})

export default Connection.then(db => db)
