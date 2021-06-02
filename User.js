import mongoose from 'mongoose'

const User = new mongoose.Schema({
  firstname: {
    type: String,
    // required: true
  },
  lastname: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  phonenumber: {
    type: String,
    // required: true
  },
  location: {
    city: {
      type: String
    },
    address: {
      type: String
    }
  },
  social: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    telegram: {
      type: String
    },
  }
})

export default mongoose.model('User', User)