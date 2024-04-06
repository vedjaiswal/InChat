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
  imageUrl : {
    type : String,
    default: "https://tse1.mm.bing.net/th?id=OIP.isCIg4bUGEpxSFWRGyXF5gHaHa&pid=Api&P=0&h=180",
  },
  description : {
    type : String,
    default : "Hey there i am using InChat"
  },
  password: {
    type: String,
    required: true
  }
});

const user = mongoose.model('User', userSchema);

export default user;
