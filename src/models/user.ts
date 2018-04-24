import shortId from 'shortid'

import Mongoose from './../db/connection'

const User = new Mongoose.Schema({
  _id: {
    type: String,
    default: shortId.generate
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
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
  }
})

export default Mongoose.model('user', User)
