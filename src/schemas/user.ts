import Mongo from './../db/connection'
import { ObjectId } from 'mongoose'

const User = new Mongo.Schema({
  _id: {
    type: ObjectId
  },
  user: {
    type: String,
    required: true,
    unique: true
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
  active: {
    type: Boolean,
    default: true
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
