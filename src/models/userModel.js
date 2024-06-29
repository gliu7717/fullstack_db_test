import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false // You should be aware of the outcome after set to false
  }
);

const User = mongoose.model('users', userSchema);

export default User;