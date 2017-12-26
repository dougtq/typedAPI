import Mongo from './../db/conn-factory'
import { ObjectId } from 'mongoose'

const User = new Mongo.Schema({
  _id: {
    type: ObjectId
  },
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String
  },
  profilePic: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export default Mongo.model('user', User)
