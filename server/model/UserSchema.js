  import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullname :{
    type:String,
    required:true
  },
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

const user = mongoose.model('User', userSchema);

export default user;
